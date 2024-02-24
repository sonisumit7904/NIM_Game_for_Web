/* global AOS */

AOS.init({
  duration: 500,
  once: true,
  offset: -9999,
});

const userLanguage = navigator.language;
const englishButton = document.getElementById('en-button');
englishButton.classList.add('btn-primary');

