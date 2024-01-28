/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]')\r\nconst modalBtnSubmit = document.querySelectorAll('[data-modal--submit]')\r\nconst body = document.body\r\nconst modalClose = document.querySelectorAll('.modal__close')\r\nconst modalTrigger = document.querySelector('.modal__trigger')\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet $this = event.currentTarget\r\n\t\tlet modalId = $this.getAttribute('data-modal')\r\n\t\tlet modal = document.getElementById(modalId)\r\n\t\t\r\n\t\tmodal.classList.add('show')\r\n\t\tbody.classList.add('no-scroll')\r\n\t})\r\n})\r\n\r\nmodalClose.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet currentModal = event.currentTarget.closest('.modal')\r\n\t\tlet textAreaValue = document.querySelector('.modal__input--textarea').value\r\n\r\n\t\tif (textAreaValue === '' && modalTrigger.classList.contains('show')) {\t\r\n\t\t\tmodalTrigger.classList.remove('show')\r\n\t\t}\r\n\r\n\t\tcurrentModal.classList.remove('show')\r\n\t\tbody.classList.remove('no-scroll')\r\n\t})\r\n})\r\n\r\nmodalBtnSubmit.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet $this = event.currentTarget\r\n\t\tlet modalId = $this.getAttribute('data-modal--submit')\r\n\t\tlet modal = document.getElementById(modalId)\r\n\t\tlet textAreaValue = document.querySelector('.modal__input--textarea').value\r\n\r\n\t\tif (textAreaValue === '') {\t\r\n\t\t\tmodal.classList.add('show')\r\n\t\t} \r\n\t\telse if (textAreaValue !== '' && modal.classList.contains('show')) {\r\n\t\t\tmodal.classList.remove('show')\r\n\t\t}\r\n\t})\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("const leftButton = document.querySelectorAll('[data-left__slider]');\r\n\r\n[].forEach.call(leftButton, function(btn){\r\n\tbtn.addEventListener('click', function(e){\r\n\tlet reviewSlider = e.target.closest('.review__slider')\r\n  \t if (reviewSlider.classList.contains('right__slider')) {\r\n  \t \treviewSlider.classList.remove('right__slider')\r\n  \t }\r\n\r\n  \t reviewSlider.classList.add('left__slider')\r\n\r\n  })\r\n})\r\n\r\nconst rightButton = document.querySelectorAll('[data-right__slider]');\r\n[].forEach.call(rightButton, function(btn){\r\n\tbtn.addEventListener('click', function(e){\r\n\tlet reviewSlider = e.target.closest('.review__slider')\r\n  \tif (reviewSlider.classList.contains('left__slider')) {\r\n  \t \treviewSlider.classList.remove('left__slider')\r\n  \t}\r\n\r\n  \t reviewSlider.classList.add('right__slider')\r\n     \r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/test.js":
/*!*******************************!*\
  !*** ./src/assets/js/test.js ***!
  \*******************************/
/***/ (function() {

eval("const testBtnComplete = document.querySelectorAll('[data-complete]')\r\nconst testInfo = document.getElementById('test-info')\r\nconst testComplete = document.getElementById('test-complete')\r\nconst testChoose = document.querySelectorAll('[data-choose]')\r\nconst testList = document.querySelector('.test__list')\r\nconst testListSpan = document.querySelector('#test__list')\r\nconst testType = document.querySelector('.test__type')\r\n\r\ntestBtnComplete.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet $this = event.currentTarget\r\n\t\tlet testId = $this.getAttribute('data-complete')\r\n\t\tlet test = document.getElementById(testId)\r\n\r\n\t\tif (testId === 'test-complete') {\r\n\t\t\ttestInfo.classList.add('hide')\r\n\t\t\ttest.classList.add('show')\r\n\t\t} \r\n\t\telse {\r\n\t\t\ttestComplete.classList.replace('show', 'hide')\r\n\t\t\ttest.classList.replace('hide', 'show')\r\n\t\t}\r\n\t})\r\n})\r\n\r\ntestChoose.forEach(item => {\r\n\titem.addEventListener('click', event => {\r\n\t\tlet $this = event.currentTarget\r\n\t\tlet testName = $this.getAttribute('data-choose')\r\n\t\tlet test = document.getElementById(testName)\r\n\r\n\t\tif (test.classList.contains('show')) {\r\n\t\t\ttest.classList.remove('show')\r\n\t\t\t$this.classList.remove('show')\r\n  \t\t}\r\n\t\telse {\r\n\t\t\ttest.classList.add('show')\r\n\t\t\t$this.classList.add('show')\r\n  \t\t\ttestListSpan.innerText += ',' + $this.textContent\r\n    \t\ttestList.style.height = +testList.style.height.replace('em','') + 2 + 'em';\r\n\r\n\t\t}\r\n\t})\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/test.js"]();
/******/ 	
/******/ })()
;