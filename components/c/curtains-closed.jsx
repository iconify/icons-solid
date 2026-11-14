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

.otcs726gf {
  d: path("M2.5 3.5h19m-18 0v17q4.25 1.25 8.5 0q4.25 1.25 8.5 0v-17m-8.5 0v17");
}

.spvqjh3-d {
  d: path("M7.75 3.5q-1.25 4 0 7.5t0 7m8.5-14.5q-1.25 4 0 7.5t0 7");
}
</style><g class="hntgybcog"><path class="otcs726gf"/><path class="spvqjh3-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:curtains-closed"} {...others} />);
}

export default Component;
