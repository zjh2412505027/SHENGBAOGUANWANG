document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");

    // 处理头部滚动效果
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 可选：未来可在此处添加移动端菜单切换逻辑
});