import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4_g5c43k {
  stroke-linejoin: round;
  d: path("M13 11.7148C13 13.4674 15.1633 15.3304 16.4901 16.3082C16.9442 16.643 17.1713 16.8103 17.5 16.8103C17.8287 16.8103 18.0558 16.643 18.5099 16.3083C19.8367 15.3304 22 13.4674 22 11.7148C22 9.03759 19.5249 8.03807 17.5 10.1062C15.4751 8.03807 13 9.03759 13 11.7148Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvkasiemb {
  d: path("M10 16H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.s19aowben {
  d: path("M20 6L3 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.y8xtn591b {
  d: path("M9 11H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="s19aowben"/><path class="mvkasiemb"/><path class="y8xtn591b"/><path class="b4_g5c43k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-minimalistic-line-duotone"} {...others} />);
}

export default Component;
