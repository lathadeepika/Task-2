let cakeSelect = document.getElementById("cakeSelect");
let quantity = document.getElementById("quantity");
let total = document.getElementById("total");
let form = document.getElementById("orderForm");
let message = document.getElementById("message");

function calculateTotal() {
    let price = cakeSelect.value;
    let qty = quantity.value;

    if(price && qty) {
        total.innerText = price * qty;
    } else {
        total.innerText = 0;
    }
}

cakeSelect.addEventListener("change", calculateTotal);
quantity.addEventListener("input", calculateTotal);


form.addEventListener("submit", function(e) {
    e.preventDefault();

    let phone = document.getElementById("phone").value;

    if(phone.length !== 10) {
        message.style.color = "red";
        message.innerText = "Enter valid 10-digit phone number!";
        return;
    }

    message.style.color = "green";
    message.innerText = "🎉 Order Placed Successfully!";
});
