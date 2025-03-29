// 走马灯效果
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransformValue;
}

// 每3秒切换一次图片
setInterval(changeImage, 3000);
