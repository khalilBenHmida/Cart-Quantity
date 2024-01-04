let plusButtons = Array.from(document.getElementsByClassName("fa-plus"));
let quantity = Array.from(document.getElementsByClassName("quantity"));
let price = Array.from(document.getElementsByClassName("prices"));

function updateCart() {
    let sum = 0;
    for (let i = 0; i < quantity.length; i++) {
        sum += parseInt(quantity[i].innerText) * parseInt(price[i].innerText.split(' ')[1]);
    }
    document.getElementById("total").innerHTML = "Total: $" + sum;
}

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function () {
        quantity[i].innerText++;
        updateCart();
    });
}

let minusButtons = Array.from(document.getElementsByClassName("fa-minus"));
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function () {
        if (quantity[i].innerText > 0) {
            quantity[i].innerText--;
            updateCart();
        }
    });
}

let trashButtons = Array.from(document.getElementsByClassName("fa-trash"));

for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", function () {
        trashButtons[i].closest(".card").remove();
        updateCart();
    });
}

let heartButtons = Array.from(document.getElementsByClassName("fa-heart"));
for (const heart of heartButtons) {
    heart.addEventListener("click", function () {
        heart.classList.toggle('red');
    });
}

updateCart();
