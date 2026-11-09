
import { products } from './products.js';

const categories = [...new Set(products.map((product) => product.category))].map((category) => ({
  name: category,
  count: products.filter((product) => product.category === category).length,
}));

console.log('Categories:', categories);

const categoryContainer = document.getElementById('category-container');

categories.forEach((category) => {
  categoryContainer.innerHTML += `<!-- Electronics -->
      <a
        id="category-1"
        href="/products?category=electronics"
        class="group flex min-h-[180px] flex-col items-center justify-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
      >
        <svg
          class="h-12 w-12 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="m4 16-2 4h20l-2-4M4 16h16" />
        </svg>

        <h3 class="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">
          ${category.name}
        </h3>
      </a>`;
})

console.log('Category Container:',categoryContainer);

const productContainer = document.getElementById('product-container');

products.forEach((product) => {
  productContainer.innerHTML += `<article class="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <a
          href="/products/20"
          class="relative flex h-72 items-center justify-center p-8"
        >
          <span class="absolute left-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            New
          </span>

          <img
            src="${product.image}"
            alt="Purple women's Be Kind graphic T-shirt"
            loading="lazy"
            class="h-full w-full object-contain"
          />
        </a>

        <div class="flex flex-1 flex-col p-6">
          <p class="text-sm uppercase tracking-wide text-gray-500">
            ${product.title}
          </p>

          <h3 class="mt-2 min-h-14 text-lg font-semibold leading-7 text-gray-800">
            <a href="/products/20" class="line-clamp-2 hover:text-blue-600">
              ${product.description}
            </a>
          </h3>

          <div class="mt-4 text-2xl tracking-wide" role="img" aria-label="4 out of 5 stars">
            <span class="text-amber-500">★★★★</span><span class="text-gray-300">☆</span>
          </div>

          <div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
            <p class="text-2xl font-bold text-blue-600">$${product.price.toFixed(2)}</p>

            <div class="flex items-center gap-3">
              <a href="/products/20" class="text-gray-600 hover:text-blue-600">
                View
              </a>
              <button
                type="button"
                aria-label="Add DANVOUY T-shirt to cart"
                class="rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
              >
                + Cart
              </button>
            </div>
          </div>
        </div>
      </article>`});

     
