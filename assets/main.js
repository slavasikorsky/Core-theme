(function () {
  var toggle = document.querySelector('.header__menu-toggle');
  var menu = document.getElementById('header-mobile-menu');
  var overlay = document.querySelector('.header__mobile-overlay');

  var closeBtn = document.querySelector('.header__mobile-close');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      closeMenu();
      toggle.focus();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();
