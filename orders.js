let cartItems = [];


function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
    updateOrderForm(); // Add this line to update the order form
}

function updateCart() {
    const cartList = document.getElementById('cart-items');

    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });
    const checkoutButton = document.querySelector('#cart button');
    checkoutButton.textContent = `Checkout - Total: $${totalPrice}`;
}

function checkout() {
    document.getElementById('menuPage').style.display = 'none';
    document.querySelector('footer').style.display='none';
    document.getElementById('orderFormContainer').style.display = 'block';
    document.getElementById('cart').style.display = 'none';

    // Append orders.css to the head section
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'orders.css';
    document.head.appendChild(link);

    // Remove script.js
    var script = document.getElementById('script');
    script.parentNode.removeChild(script);

    // Add orders.js
    var ordersScript = document.getElementById('orders(1)');
    ordersScript.removeAttribute('defer');

    // Reset cart items
    cartItems = [];
    updateCart();
}

// Add this function to update the order form
function updateOrderForm() {
    const orderFormCartItems = document.getElementById('orderFormCartItems');
    let totalyPrice = 0;
    orderFormCartItems.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderFormCartItems.appendChild(listItem);
        totalyPrice += item.price;
    });
    const totalPriceElement = document.querySelector('#price');
    totalPriceElement.textContent = `Total Price: $${totalyPrice}`;
}


document.getElementById('addToCartBtn').addEventListener('click', function() {
    
    selectedFood = document.getElementById('maindish').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('garnishes').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('salads').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('sauces').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('deserts').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('drinks').value;
    cartItems.push(selectedFood);
    
    updateCartItems();
});
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  updateCart();
  updateOrderForm(); // Add this line to update the order form
}

function updateCartItems() {
  const cartItemsElement = document.getElementById('cart-items-order-form');
  cartItemsElement.innerHTML = ''; // Clear the existing content
  
  cartItems.forEach((item, index) => {
      const itemElement = document.createElement('li');
      const itemText = document.createTextNode(`${item.name} - $${item.price}`); // Create text node
      itemElement.appendChild(itemText); // Append text node to list item
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => {
          cartItems.splice(index, 1);
          updateCartItems();
      });
      
      itemElement.appendChild(deleteButton);
      cartItemsElement.appendChild(itemElement);
  });
}



/* 
    document.getElementById('foodItem').addEventListener('change', function() {
        const selectedFood = this.value;
    }); */

//cart elements
document.getElementById('maindish').addEventListener('change', function() {
    const selectedFood = this.value;
});
 
//  const cartItems = [];

     document.getElementById('addToCartBtn').addEventListener('click', function() {
         const selectedFood = document.getElementById('foodItem').value;
         cartItems.push(selectedFood);
        
         updateCartItems();
     });

     function updateCartItems() {
         const cartItemsElement = document.getElementById('cartItems');
         cartItemsElement.innerHTML = '<h2>Cart Items:</h2>';
        
        cartItems.forEach(item => {
             const itemElement = document.createElement('p');
             itemElement.textContent = item;
             cartItemsElement.appendChild(itemElement);
         });
     } 

     function handleButtonClick() {
      // Display the alert message
      alert('Thank you for your order!');
      
      // Wait for 2 seconds (2000 milliseconds) before refreshing the page
      setTimeout(function() {
          // Refresh the page
          location.reload();
      }, 2000); // 2000 milliseconds = 2 seconds
  }


// //   //creditcard
// //   // Get all card checkboxes
// // const cardCheckboxes = document.querySelectorAll('.card-checkbox');
// // const submitBtn = document.getElementById('submitBtn');
// // const selectedCardsDiv = document.getElementById('selectedCards');

// // // Function to handle form submission
// // function handleSubmit(event) {
// //   event.preventDefault();

// //   // Get selected card options
// //   const selectedCards = [];
// //   cardCheckboxes.forEach(checkbox => {
// //     if (checkbox.checked) {
// //       selectedCards.push(checkbox.value);
// //     }
// //   }); */

  // Display selected cards
  selectedCardsDiv.innerHTML = `Selected cards: ${selectedCards.join(', ')}`;


// Add event listener for form submission
submitBtn.addEventListener('click', handleSubmit);


// // Eseményfigyelő a fizetési mód változtatására
// document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
//   radio.addEventListener('change', function() {
//       if (this.value === 'card') {
//           cardDetailsDiv.style.display = 'block'; // Mutassuk meg a kártyaadatok mezőt
//       } else {
//           cardDetailsDiv.style.display = 'none'; // Rejtjük el a kártyaadatok mezőt
//       }
//   });


// Eseményfigyelő a fizetés elküldése gombra
document.getElementById('submitOrderBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Megakadályozza az alapértelmezett űrlapbeküldési viselkedést

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  if (paymentMethod === 'cash') {
      // Készpénzes fizetés logika
      alert('Fizetés készpénzzel');
  } else if (paymentMethod === 'card') {
      // Bankkártyás fizetés logika
      const creditCardNumber = document.getElementById('creditCardNumber').value;

      if (validateCreditCardNumber(creditCardNumber)) {
          // Ha a kártyaszám megfelelő, folytathatjuk a fizetést
          alert(`Bankkártyás fizetés: ${creditCardNumber}`);
          // Ezt követően itt folytathatod a további fizetési lépéseket vagy a rendelés elküldését
      } else {
          alert('Kérem adjon meg egy érvényes 16 jegyű bankkártyaszámot.');
      }
  }
});




// //credit card number 

//   // Function to validate the credit card number
// function validateCreditCardNumber(creditCardNumber) {
//     // Remove non-numeric characters from the input
//     creditCardNumber = creditCardNumber.replace(/\D/g, '');
    
//     // Check if the input is a 16-digit number
//     if (/^\d{16}$/.test(creditCardNumber)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  

  
  // // Event listener for the form submission
  // document.querySelector('form').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent the default form submission
    
  //   // Get the credit card number input
  //   const creditCardNumber = document.getElementById('creditCardNumber').value;
    
  //   // Validate the credit card number
  //   if (validateCreditCardNumber(creditCardNumber)) {
  //     // Format and display the credit card number
  //     const formattedCreditCardNumber = formatCreditCardNumber(creditCardNumber);
  //     alert(`Your credit card number is: ${formattedCreditCardNumber}`);
  //   } else {
  //     alert('Please enter a valid 16-digit credit card number.');
  //   }
  // });

document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    if (this.value === 'card') {
      // Mutassuk meg a kártyaadatok mezőt, ha a "card" opciót választják
      document.getElementById('cardDetailsDiv').style.display = 'block';
    } else {
      // Rejtjük el a kártyaadatok mezőt, ha a "cash" opciót választják
      document.getElementById('cardDetailsDiv').style.display = 'hidden';
    }
  });
});

// Eseményfigyelő a fizetés elküldése gombra
document.getElementById('submitOrderBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Megakadályozza az alapértelmezett űrlapbeküldési viselkedést

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  if (paymentMethod === 'cash') {
    // Készpénzes fizetés logika
    alert('Fizetés készpénzzel');
  } else if (paymentMethod === 'card') {
    // Bankkártyás fizetés logika
    const creditCardNumber = document.getElementById('creditCardNumber').value;

    if (validateCreditCardNumber(creditCardNumber)) {
      // Ha a kártyaszám megfelelő, folytathatjuk a fizetést
      alert(`Bankkártyás fizetés: ${creditCardNumber}`);
      // Ezt követően itt folytathatod a további fizetési lépéseket vagy a rendelés elküldését
    } else {
      alert('Kérem adjon meg egy érvényes 16 jegyű bankkártyaszámot.');
    }
  }
});

// Kártyaszám validálása
function validateCreditCardNumber(creditCardNumber) {
  // Töröljük az inputból a nem numerikus karaktereket
  creditCardNumber = creditCardNumber.replace(/\D/g, '');

  // Ellenőrizzük, hogy a bemenet 16 jegyű szám-e
  return /^\d{16}$/.test(creditCardNumber);
}


  //hover text

  // Get the text elements and photo elements
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const photo1 = document.getElementById('photo1');
const photo2 = document.getElementById('photo2');

// Add mouseover event listeners for text1
text1.addEventListener('mouseover', function() {
  photo1.style.display = 'block';
  photo2.style.display = 'none';
});

// Add mouseover event listeners for text2
/* text2.addEventListener('mouseover', function() {
  photo1.style.display = 'none';
  photo2.style.display = 'block';
}); */


  //delete items

function updateCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '<h2>Cart Items:</h2>';
    
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => {
            cartItems.splice(index, 1);
            updateCartItems();
        });
        
        itemElement.appendChild(deleteButton);
        cartItemsElement.appendChild(itemElement);
    });
}

