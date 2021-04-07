import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);
const routes = [
  // {
  //   path: "/",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   component: About,
  // },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
