// import data js

import { burgers } from "./data.js";

const burgerwrapper = document.querySelector(".bgures-card-wapper");

class app {
  constructor() {
    this._getBurgers();
  }
  _getBurgers() {
    burgers.forEach((burger) => this._renderBurger(burger));
  }

  cuerancy(price) {
    return price.toLocaleString("bn-BD", {
      style: "currency",
      currency: "BDT",
    });
  }

  _renderBurger(burger) {
    const html = `
    <div class="bguer-card rounded-lg shadow-md overflow-hidden w-96 h-96 bg-white hover:shadow-xl duration-300">
    <div class="bu-img h-48 overflow-hidden flex justify-center items-center">
        <img src="${burger.img}" alt="${burger.img}" class="block w-full">
    </div>
    <div class="bu-texts p-5 flex flex-col items-start gap-2">
        <h2 class="text-2xl font-medium">${burger.title}</h2>
        <p class="text-xl font-semibold text-orange-500">${this.cuerancy(
          burger.price
        )} </p>
        <button ${(onclick =
          this
            ._oderHandler.bind(this))} class="oder bg-orange-500 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">Order Now</button>    
    </div>
</div>
    `;
    // burgerwrapper.insertAdjacentHTML("after",html);
    burgerwrapper.insertAdjacentHTML("afterbegin", html);
  }

  _oderHandler() {
   
    console.log("click");

    



  }
}

const myApp = new app();
