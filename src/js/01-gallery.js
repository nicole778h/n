// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
import { galleryItems } from './gallery-items';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.gallery');

    function createGallery() {
        for (const photo of galleryItems) {
            const image = document.createElement('img');
            image.classList.add('gallery__image');
            image.setAttribute('src', photo.preview);
            image.setAttribute('alt', photo.description);

            const elem = document.createElement('li');
            elem.classList.add('gallery__item');

            const link = document.createElement('a');
            link.setAttribute('href', photo.original);
            link.classList.add('gallery__link');

            elem.appendChild(link);
            link.appendChild(image);
            list.appendChild(elem);
        }
    }

    createGallery();

    list.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.classList.contains('gallery__image')) {
            const instance = new SimpleLightbox('.gallery__item a');
            instance.open();
        }
    });
});