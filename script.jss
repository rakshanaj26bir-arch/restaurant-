const foods = [
  { name: "Chicken Biryani", price: 220, desc: "Fragrant basmati rice with spicy chicken", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
  { name: "Paneer Butter Masala", price: 180, desc: "Creamy paneer in rich tomato gravy", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },
  { name: "Pizza", price: 299, desc: "Cheesy pizza with fresh toppings", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { name: "Burger", price: 149, desc: "Crispy burger with fries", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
  { name: "Fried Rice", price: 160, desc: "Veg fried rice with manchurian", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },
  { name: "Ice Cream", price: 99, desc: "Vanilla, Chocolate & Butterscotch", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" }
];

let cart = [];
let total = 0;

const menuList = document.getElementById('menuList');

foods.forEach((f, i) => {
  menuList.innerHTML += `
    <div class="card">
      <img src="${f.img}">
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p class="price">₹${f.price}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
    </div>`;
});

function addToCart(i) {
  cart.push(foods[i]);
  total += foods[i].price;
  updateCart();
  alert(foods[i].name + " added to cart!");
}

function updateCart() {
  const list = document.getElementById('cartItems');
  if (cart.length === 0) {
    list.innerHTML = "<li>Cart is empty</li>";
  } else {
    list.innerHTML = cart.map((c, idx) =>
      `<li>${c.name} - ₹${c.price} <button onclick="removeItem(${idx})" style="background:red;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer">X</button></li>`
    ).join('');
  }
  document.getElementById('total').innerText = "Total: ₹" + total;
}

function removeItem(idx) {
  total -= cart[idx].price;
  cart.splice(idx, 1);
  updateCart();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty! Add some food.");
    return;
  }
  document.getElementById('orderMsg').innerText = "✅ Order Placed! Total ₹" + total + ". Thank you!";
  cart = [];
  total = 0;
  updateCart();
}

function bookTable(e) {
  e.preventDefault();
  const name = document.getElementById('cname').value;
  document.getElementById('bookMsg').innerText = "✅ Thank you " + name + "! Your table is booked.";
}
