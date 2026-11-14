import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.af5l-sn9e {
  d: path("M4 8a8 2.25 0 1 0 16 0A8 2.25 0 1 0 4 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1csnre9n {
  d: path("m4 8l2.75 13h10.5L20 8M7.5 6.25l-2-3.75h3l2 3.25");
}
</style><g class="hntgybcog"><path class="af5l-sn9e"/><path class="m1csnre9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:creamer-cup"} {...others} />);
}

export default Component;
