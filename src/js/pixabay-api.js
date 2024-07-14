export const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = process.env.PIXABAY_API_KEY;

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
