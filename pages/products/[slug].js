import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Assume we fetch product data based on slug
  const product = getProductBySlug(slug); // Function to retrieve product details

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h2>B-Vitamins</h2>
      <ul>
        {product.bVitamins.map((vitamin) => (
          <li key={vitamin.name}>{vitamin.name}: {vitamin.benefits}</li>
        ))}
      </ul>
    </div>
  );
};

// Function to get product data by slug (mock implementation)
const getProductBySlug = (slug) => {
  const products = {
    'b-vitamin-cap': {
      name: 'B-Vitamin Cap',
      image: '/path/to/b-vitamin-cap.jpg',
      description: 'Description of B-Vitamin Cap',
      bVitamins: [{ name: 'Vitamin B1', benefits: 'Energy production' }, { name: 'Vitamin B2', benefits: 'Antioxidant' }],
    }
  };
  return products[slug] || {};
};

export default ProductDetail;