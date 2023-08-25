import { createApp } from "vue";
import App from "./App.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

const app = createApp(App).mount("#app");
app.component("infinite-loading", InfiniteLoading);
