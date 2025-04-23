window.onload = function () {
    //
    // -------------------- INTRO TYPEWRITER & HOVER --------------------
    //
    function typeText(selector, text, speed = 50, callback = null) {
      const element = document.querySelector(selector);
      element.textContent = '';
      let i = 0;
      const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) {
          clearInterval(interval);
          if (callback) callback();
        }
      }, speed);
    }
  
    typeText(
        '.intro',
        "Hi, I'm a developer who likes smooth animations and playful design. If you want to see more of my work, check out ",
        40,
        () => {
            // Adding a link to the text after typing is complete
          const link = document.createElement('a');
          link.href = 'https://pixelsummit.dev';
          link.target = '_blank';
          link.textContent = 'PixelSummit';
          link.classList.add('glow-pink-link');
      
          document.querySelector('.intro').appendChild(link);
        }
      );
      
  
    const introText = document.querySelector('.intro');
    introText.addEventListener('mouseenter', () => {
      anime({
        targets: '.intro',
        fontSize: '1.5rem',
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
  
    introText.addEventListener('mouseleave', () => {
      anime({
        targets: '.intro',
        fontSize: '1.2rem',
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
  
    //
    // -------------------- LOGO DRAWING --------------------
    //
    function animateLogo() {
      anime({
        targets: '#animated-logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: anime.stagger(100)
      });
    }
  
    animateLogo();
  
    document.querySelector('#animated-logo').addEventListener('mouseenter', () => {
      animateLogo();
    });
  
    //
    // -------------------- EYE DRAWING --------------------
    //
    function drawEye() {
      anime({
        targets: '#eye-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000
      });
  
      anime({
        targets: '#eye-pupil',
        opacity: [0, 1],
        r: [0, 5],
        delay: 500,
        duration: 1200,
        easing: 'easeOutBack'
      });
    }
  
    drawEye();
  
    document.querySelector('#about-artwork').addEventListener('mouseenter', () => {
      drawEye();
    });
  
    //
    // -------------------- SMOOTH SCROLL --------------------
    //
    document.querySelector('.scroll-button').addEventListener('click', () => {
      document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
    });
  
    //
    // -------------------- HERO ANIMATIONS --------------------
    //
    anime({
      targets: '.tagline',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 400,
      duration: 1000,
      easing: 'easeOutExpo'
    });
  
    anime({
      targets: '.cta-button',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: 1000,
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      complete: function () {
        anime({
          targets: '.cta-button',
          scale: [1, 1.05],
          direction: 'alternate',
          easing: 'easeInOutSine',
          duration: 800,
          loop: true
        });
      }
    });
  
    //
    // -------------------- FEATURE ICONS --------------------
    //
    anime({
      targets: '.feature',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200, { start: 1600 }),
      duration: 800,
      easing: 'easeOutExpo'
    });
  
    ['#feature1 img', '#feature2 img', '#feature3 img'].forEach((selector) => {
      const el = document.querySelector(selector);
  
      el.addEventListener('mouseenter', () => {
        anime({
          targets: selector,
          scale: 1.2,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
  
      el.addEventListener('mouseleave', () => {
        anime({
          targets: selector,
          scale: 1,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
    });
  };
  