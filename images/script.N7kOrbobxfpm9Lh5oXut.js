(function() {
  var el = document.querySelector('.tt_article_useless_p_margin');
  if (!el) return;

  var scrollEventHandler = function scrollEventHandler() {
    if (window.innerHeight + window.scrollY >= document.querySelector('.tt_article_useless_p_margin').offsetHeight) {
      try {
        window.removeEventListener('scroll', scrollEventHandler);
        var elms = Array.from(document.querySelectorAll('.prev-next-article'));

        elms.map(function(el) {
          return el.classList.add('visible');
        });
        __BASECAMP__.toast.send('유익하셨다면 공감 하나 부탁드릴게요! ✨');
        setTimeout(function() {
          elms.map(function(el) {
            return el.classList.remove('visible');
          });
        }, 8000);
      } catch (err) {
        console.error(err);
      }
    }
  };
  window.addEventListener('scroll', scrollEventHandler);
})();
(function() {
  if (!document.querySelector('.bc-markdown')) return;
  var el = document.createElement('div');
  var title = document.querySelector('.bc-markdown .bc-markdown__header .heading').textContent;
  var imageEl = document.querySelector('.bc-markdown .thumbnail').innerHTML;
  var shares = ['kakao', 'facebook', 'naver', 'twitter', 'band', 'kakaostory'].reduce(function(acc, v) {
    return acc + ('<li class="bc-share__item" data-share-item="' + v + '"><span class="bc-share__item-icon bc-share__item-icon--' + v + '"></span></li>');
  }, '');
  el.classList.add('bc-share');
  el.innerHTML = '\n      ' + imageEl + '\n      <div class="content">\n        <p class="title">' + title + '</p>\n        <ul>\n          ' + shares + '\n        </ul>\n        <div class="url-copy-holder">\n          <input id="copy" value="' + location.href + '" readonly="readonly">\n          <button data-clipboard-target="#copy" class="copy-btn">\uC8FC\uC18C\uBCF5\uC0AC</button>\n        </div>        \n      </div>\n    ';

  document.querySelector('#share-reaction').addEventListener('click', function() {
    __BASECAMP__.popup.show(el);
  });

  el.querySelector('ul').addEventListener('click', function(e) {
    var target = e.target.getAttribute('data-share-item') || e.target.closest('.bc-share__item').getAttribute('data-share-item');
    __BASECAMP__.share.push(target);
  });
  el.querySelector('.copy-btn').addEventListener('click', function() {
    __BASECAMP__.share.copy();
    __BASECAMP__.popup.hide();

    __BASECAMP__.toast.send('포스팅 주소를 복사했습니다 📄');
  });
})();
(function() {
  window.addEventListener('load', function() {
    var date = new Date();
    document.querySelector('.bc-footer .copyright time').textContent = date.getFullYear();
  });
})();
