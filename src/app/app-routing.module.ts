import { FormProdutoComponent } from "./Componentes/produto/form-produto/form-produto.component";
import { ListProdutoComponent } from "./Componentes/produto/list-produto/list-produto.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Componentes/usuario/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/produtos",
    pathMatch: "full",
  },
  { path: "produtos", component: ListProdutoComponent },
  { path: "form-produto", component: FormProdutoComponent },
  { path: "form-produto/:id", component: FormProdutoComponent },
  { path: "", redirectTo: "/produtos", pathMatch: "full" },
  { path: "**", redirectTo: "/produtos", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
