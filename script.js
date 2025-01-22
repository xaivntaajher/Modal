'use strict';

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent); // {} not needed, only one line of code is being executed
