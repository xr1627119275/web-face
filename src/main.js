import Vue from "vue";
import App from "./App.vue";
import vant from "vant";
Vue.use(vant);
import "vant/lib/index.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
