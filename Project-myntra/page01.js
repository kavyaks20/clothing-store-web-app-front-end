// JavaScript for interaction

// Example to handle cart updates
let cartCount = 0;

const cartButton = document.getElementById('cart-btn');
const cartCountDisplay = document.getElementById('cart-count');

// Example function to simulate adding an item to the cart
function addToCart() {
  cartCount++;
  cartCountDisplay.textContent = cartCount;
}

// Example of search button click (You can modify this to actually search products)
const searchButton = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', function () {
  const searchQuery = searchBar.value.trim();
  if (searchQuery) {
    alert('Searching for: ' + searchQuery);
  }
  searchBar.value = '';  // Clear the search bar
});

// Simulating adding items to the cart
setInterval(addToCart, 5000); // Adds an item every 5 seconds for demonstration
