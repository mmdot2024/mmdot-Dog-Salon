(()=>{var e;!function(e){if(void 0===e.ltg){var t=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),t)};e.ltg={},e.ltg.action=t,e.ltg.removeClass=function(e,n){t(e,(function(e){return e.classList.remove(n)}))},e.ltg.addClass=function(e,n){t(e,(function(e){return e.classList.add(n)}))},e.ltg.swap=function(e,n,o){t(e,(function(e){e.classList.remove(n),e.classList.add(o)}))}}}(window),function(e,t){var n=function(){e.scrollY>0?t.body.classList.add("scrolled"):t.body.classList.remove("scrolled")};e.addEventListener("scroll",n,!1),"loading"!==t.readyState?n():e.addEventListener("DOMContentLoaded",n,!1);var o=t.getElementById("site-header");if(lightningOpt.header_scrool&&o){var i=t.getElementById("site-header").offsetHeight,c=!1,s=!1,l=function(){var n=t.getElementById("site-header").nextElementSibling;!s&&e.scrollY>i?(t.body.classList.add("header_scrolled"),lightningOpt.add_header_offset_margin&&(n.style.marginTop=i+"px")):(t.body.classList.remove("header_scrolled"),lightningOpt.add_header_offset_margin&&(n.style.marginTop=null))},a=function(n){t.body.classList.remove("header_scrolled"),e.removeEventListener("scroll",l),!1!==c&&clearTimeout(c),s=!0,c=setTimeout((function(){e.addEventListener("scroll",l,!0),s=!1}),2e3)};t.addEventListener("readystatechange",(function(){if("complete"===t.readyState){var e=t.getElementById("site-header").nextElementSibling;Array.prototype.forEach.call(t.getElementsByTagName("a"),(function(t){var n=t.getAttribute("href");"#top"===n&&t.addEventListener("click",(function(){e.style.marginTop=null})),n&&-1!==n.indexOf("#")&&(["tab"].indexOf(t.getAttribute("role"))>0||t.getAttribute("data-toggle")||t.getAttribute("carousel-control")||t.addEventListener("click",a))}))}})),t.addEventListener("DOMContentLoaded",(function(){location.hash?(e.removeEventListener("scroll",l,!1),setTimeout((function(){e.addEventListener("scroll",l,!1)}),500)):e.addEventListener("scroll",l,!1)}))}function d(){Array.prototype.forEach.call(t.getElementsByTagName("iframe"),(function(e){var t=e.getAttribute("src");if(t&&(t.indexOf("youtube")>=0||t.indexOf("vimeo")>=0||t.indexOf("maps")>=0))if("complete"===e.contentWindow.document.readyState){var n=e.getAttribute("width"),o=e.getAttribute("height")/n,i=e.offsetWidth*o;e.style.maxWidth="100%",e.style.height=i+"px"}else e.contentWindow.document.addEventListener("DOMContentLoaded",(function(){var t=e.getAttribute("width"),n=e.getAttribute("height")/t,o=e.offsetWidth*n;e.style.maxWidth="100%",e.style.height=o+"px"}))}))}e.addEventListener("DOMContentLoaded",d);var r=!1;e.addEventListener("resize",(function(){r&&clearTimeout(r),r=setTimeout(d,200)}))}(window,document),function(e,t){function n(){var e=t.getElementsByClassName("sub-section")[0];e.style.position=null,e.style.top=null,e.style.bottom=null,e.style.left=null,e.style.right=null}function o(){var e=t.getElementById("global-nav"),n=e?e.getBoundingClientRect().bottom:0;return n<0&&(n=0),n+40}function i(){var i="top";1==t.body.classList.contains("sidebar-fix-priority-top")?i="top":1==t.body.classList.contains("sidebar-fix-priority-bottom")&&(i="bottom");var c=t.body.offsetWidth,s=t.documentElement.clientHeight;if(c<992)n();else{var l=t.getElementsByClassName("main-section")[0],a=t.getElementsByClassName("sub-section")[0],d=(a.parentNode,l.getBoundingClientRect().top+e.pageYOffset),r=l.offsetHeight,u=a.offsetHeight,m=d+u;a.style.position=null,a.style.left=null;var f=a.getBoundingClientRect().left+e.pageXOffset,v=s-o();"bottom"===i&&v>u&&(i="top");var p=d+r,g=p-s,y=r-u,b=m-s,L=d-o(),h=s-(p-e.pageYOffset);if(u>r)return;var E=!1;L<e.pageYOffset&&(E=!0);var A=!1;o()+u>l.getBoundingClientRect().bottom&&(A=!0);var B=!1;b<e.pageYOffset&&(B=!0);var x=!1;g<e.pageYOffset&&(x=!0),"top"===i?E?(a.style.position="fixed",a.style.top=o()+"px",a.style.left=f+"px",A&&(a.style.position=null,a.style.left=null,a.style.top=y+"px")):n():B?(a.style.position="fixed",a.style.bottom="5px",a.style.left=f+"px",x&&(a.style.top=null,a.style.bottom=h+5+"px")):n()}}e.addEventListener("scroll",(function(){t.body.classList.contains("sidebar-fix")&&(t.getElementsByClassName("sub-section").length<1||i())})),e.addEventListener("resize",(function(){t.body.classList.contains("sidebar-fix")&&(t.getElementsByClassName("sub-section").length<1||i())}))}(window,document),e={isMobileDevice:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},addDeviceClass:function(){var t=e.isMobileDevice()?"device-mobile":"device-pc";document.body.classList.remove("device-mobile","device-pc"),document.body.classList.add(t)},openMenu:function(){e.menuBtn&&e.menuBtn.classList.add("menu-open"),e.menu&&e.menu.classList.add("vk-mobile-nav-open")},closeMenu:function(){e.menuBtn&&e.menuBtn.classList.remove("menu-open"),e.menu&&e.menu.classList.remove("vk-mobile-nav-open")}},window.addEventListener("DOMContentLoaded",(function(){e.addDeviceClass(),e.menuBtn=document.getElementById("vk-mobile-nav-menu-btn"),e.menu=document.getElementById("vk-mobile-nav"),e.menuBtn&&e.menu||console.error("Required elements not found");var t=document.getElementById("vk-mobile-nav-menu-btn");t&&t.addEventListener("click",(function(){t.classList.contains("menu-open")?e.closeMenu():e.openMenu()})),document.querySelectorAll(".vk-mobile-nav li > a").forEach((function(t){t.addEventListener("click",(function(t){t.target.getAttribute("href").indexOf(!1)&&e.closeMenu()}))}))})),e.runAcc=function(){var t=document.querySelectorAll("ul.vk-menu-acc"),n=document.createElement("span");n.classList.add("acc-btn","acc-btn-open"),t.forEach((function(t){t.classList.add("vk-menu-acc-active"),t.querySelectorAll("ul.sub-menu").forEach((function(t){t.before(n.cloneNode(!0)),t.classList.add("acc-child-close"),t.previousElementSibling.addEventListener("click",(function(){e.accAction(t)}))}))}))},e.accAction=function(e){var t=e.previousElementSibling;e.classList.contains("acc-child-close")?(e.classList.remove("acc-child-close"),e.classList.add("acc-child-open"),t.classList.remove("acc-btn-open"),t.classList.add("acc-btn-close"),e.parentNode.classList.remove("acc-parent-close"),e.parentNode.classList.add("acc-parent-open")):(e.classList.remove("acc-child-open"),e.classList.add("acc-child-close"),t.classList.remove("acc-btn-close"),t.classList.add("acc-btn-open"),e.parentNode.classList.remove("acc-parent-open"),e.parentNode.classList.add("acc-parent-close"))},e.resetAccordion=function(){document.querySelectorAll("ul.vk-menu-acc").forEach((function(e){e.classList.remove("vk-menu-acc-active")})),document.querySelectorAll("ul.vk-menu-acc li").forEach((function(e){e.classList.remove("acc-parent-open")})),document.querySelectorAll("ul.vk-menu-acc li .acc-child-close").forEach((function(e){e.classList.remove("acc-child-close")})),document.querySelectorAll("ul.vk-menu-acc li .acc-child-open").forEach((function(e){e.classList.remove("acc-child-open")}))},window.addEventListener("DOMContentLoaded",(function(){e.runAcc()}))})();