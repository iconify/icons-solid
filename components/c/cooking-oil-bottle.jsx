import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.exkjr1bte {
  d: path("M10 15c0-1.5 2-3 2-3s2 1.5 2 3c0 1.25-1 2-2 2s-2-.75-2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1tb-gltl {
  d: path("M10 3.5h4V7c0 1.5 3 2 3 5v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7c0-3 3-3.5 3-5Z");
}
</style><g class="hntgybcog"><path class="n1tb-gltl"/><path class="exkjr1bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cooking-oil-bottle"} {...others} />);
}

export default Component;
