export interface Product {
  id: number;
  name: string;
  price: number;
}

interface GetProductsFilters {
  id: string | null;
  name: string | null;
}

export async function getProducts({ id, name }: GetProductsFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // delay de 1s

  let products = [
    { id: "283", name: "Product 283", price: 46 },
    { id: "874", name: "Product 874", price: 69 },
    { id: "512", name: "Product 512", price: 23 },
    { id: "157", name: "Product 157", price: 40 },
    { id: "765", name: "Product 765", price: 52 },
    { id: "392", name: "Product 392", price: 65 },
    { id: "936", name: "Product 936", price: 61 },
    { id: "647", name: "Product 647", price: 29 },
    { id: "491", name: "Product 491", price: 58 },
    { id: "329", name: "Product 329", price: 37 },
    { id: "822", name: "Product 822", price: 31 },
    { id: "199", name: "Product 199", price: 45 },
    { id: "526", name: "Product 526", price: 32 },
    { id: "743", name: "Product 743", price: 75 },
    { id: "987", name: "Product 987", price: 21 },
    { id: "678", name: "Product 678", price: 71 },
    { id: "291", name: "Product 291", price: 63 },
    { id: "155", name: "Product 155", price: 26 },
    { id: "429", name: "Product 429", price: 79 },
    { id: "559", name: "Product 559", price: 56 },
  ];

  if (id) {
    products = products.filter((product) => product.id.includes(id));
  }

  if (name) {
    products = products.filter((product) => product.name.includes(name));
  }

  return products;
}

interface CreateProductRequest {
  name: string;
  price: number;
}

export async function createProduct(data: CreateProductRequest) {
  // simula chamada HTTP para API
  await new Promise((resolve) => setTimeout(resolve, 1000)); // delay de 1s

  return;
}
