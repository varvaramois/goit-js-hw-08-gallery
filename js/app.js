const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightboxOverlay = document.querySelector(".lightbox__overlay");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("img");

  galleryItem.className = "gallery__image";
  galleryItem.src = item.preview; 
  galleryItem.alt = item.description;
  galleryItem.dataset.source = item.original; 

  gallery.appendChild(galleryItem);
});

const allImages = document.querySelectorAll(".gallery__image");
let targetIndex = 0;

const openLightbox = (index) => {
  lightboxImage.src = galleryItems[index].original;
  lightbox.classList.add("is-open");
  targetIndex = index;
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
};

gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    const clickedImage = event.target;
    const imageLink = clickedImage.dataset.source;

    targetIndex = Array.from(allImages).indexOf(clickedImage);
    openLightbox(targetIndex);
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeLightbox();
  } else if (
    event.key === "ArrowRight" &&
    targetIndex < galleryItems.length - 1
  ) {
    targetIndex++;
    lightboxImage.src = galleryItems[targetIndex].original;
  } else if (event.key === "ArrowLeft" && targetIndex > 0) {
    targetIndex--;
    lightboxImage.src = galleryItems[targetIndex].original;
  }
});

lightboxButton.addEventListener("click", closeLightbox);

lightboxOverlay.addEventListener("click", closeLightbox);
