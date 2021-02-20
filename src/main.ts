import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/common/Layout/Layout.vue';
import Icon from '@/components/common/Icon/Icon.vue';
import {tagListModel} from '@/models/tagListModel';

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
window.removeTag = (id: string) =>{
  tagListModel.remove(id);
}
window.updateTag = (id,{name,iconName,mold})=>{
  tagListModel.update(id, {name, iconName, mold});
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
