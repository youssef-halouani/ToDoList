import { ADD_ARTICLE } from "./ActionsType";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}