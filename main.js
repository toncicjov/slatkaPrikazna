document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    
      const filterValue = this.getAttribute('data-filter');

     
      menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'grid';
        } else {
          item.style.display = 'none'; 
        }
      });
    });
  });
});



//Za naracka
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('orderModal');
  const closeModalBtn = document.querySelector('.modal-close');
  const modalProductName = document.getElementById('modalProductName');
  
  
  const orderButtons = document.querySelectorAll('.menu-item button, #specials button');


  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
           const productCard = this.closest('div');
      const h3Element = productCard.querySelector('h3');
      
      if (h3Element) {
        modalProductName.innerText = h3Element.innerText;
      }

    
      modal.style.display = 'flex';
    });
  });

  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }


  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Успешно ја пративте нарачката! Ви благодариме.');
      modal.style.display = 'none';
      orderForm.reset();
    });
  }
});



//burger menu 
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (burgerMenu && mobileMenu) {
  burgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}

if (mobileLinks.length > 0 && mobileMenu) {
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  });
}