// 1. Use JavaScript to obtain a reference to the first section 
// with the class of article_header and change its text with 
// the textContent property to "Welcome to the {insert your name here} blog"

let firstSection = document.querySelector(".article__header");
firstSection.textContent = "Welcome to the Leigha Robinson blog";
console.log(firstSection);



// 2. Use JavaScript to obtain a reference to all article__header elements 
// and change their classList property value to article__header important.

// only changes first element 
// const changePropValue = document.querySelector(".article__header")
// changePropValue.classList.add("important");

// Things that helped me solve question 2
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
// https://www.w3schools.com/js/js_loop_for.asp

const changePropValueNode = document.querySelectorAll(".article__header")
console.log(changePropValueNode)

var i;
for (i = 0; i < changePropValueNode.length; i++) {
    console.log(changePropValueNode[i]);
    changePropValueNode[i].classList.add("important");
}

// 3. Obtain a reference the element with a class of dashed and remove it.

const removeDashed = document.querySelector(".dashed");
removeDashed.classList.remove("dashed");

// 4. Obtain a reference the element with a class of article__footer and add the class of goldenrod it.

const addGoldenrod = document.querySelector(".article__footer");
addGoldenrod.classList.add("goldenrod");