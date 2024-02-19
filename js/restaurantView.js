class RestaurantView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categories");
    this.menu = document.querySelector("#navPrinc");
  }

  bindInit(handler) {
    document.getElementById('init').addEventListener('click', (event) => {
      handler();
    });
  }

  showProductTypes() {
    this.categories.replaceChildren();
    this.categories.insertAdjacentHTML('beforeend', `<div class="row" id="type-list">
			<div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Burger">
					<div class="cat-list-image"><img alt="Categoría Hamburguesas" src="img/burger.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Hamburguesas</h3>
						<div>Mejores hamburguesas</div>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Baguette">
					<div class="cat-list-image"><img alt="Categoría Baguettes" src="img/baguette.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Baguettes</h3>
						<div>Baguettes variadas</div>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a href="#product-list" data-type="Pizza">
					<div class="cat-list-image"><img alt="Categoría pizzas" src="img/pizza.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Pizzas</h3>
						<div>Pizzas sabrosas</div>
					</div>
				</a>
			</div>
		</div>`);
  }

  showCategories(categories) {
    if (this.categories.children.length > 1) this.categories.children[1].remove();
    const container = document.createElement('div');
    container.id = 'category-list';
    container.classList.add('row');
    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 col-md-6"><a data-category="${category.title}" href="#product-list">
        <div class="cat-list-image"><img alt="${category.title}" src="${category.url}" />
        </div>
        <div class="cat-list-text">
          <h3>${category.name}</h3>
          <div>${category.description}</div>
        </div>
      </a>
    </div>`);
    }
	  this.categories.append(container);
  }

  showCategoriesInMenu(categories) {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.classList.add('dropdown');
    li.insertAdjacentHTML('beforeend', `<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button"
			data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`);
    const container = document.createElement('ul');
    container.classList.add('dropdown-menu');

    for (const category of categories) {
      container.insertAdjacentHTML('beforeend', `<li><a data-category="${category.name}" class="dropdown-item" href="#product-list">${category.name}</a></li>`);
    }
    li.append(container);
    this.menu.append(li);
  }



  
}

export default RestaurantView;