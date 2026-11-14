import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5pzpobbs {
  d: path("M5.25 18.75c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15m-1.5 1.5l1.5-1.5");
}

.yivwxbbbw {
  d: path("m9.25 7.75l2.5 1L12 12l3.25.25l1 2.5");
}
</style><g class="hntgybcog"><path class="j5pzpobbs"/><path class="yivwxbbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-torn"} {...others} />);
}

export default Component;
