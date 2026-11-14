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

.o55hkijdf {
  d: path("M4.5 18V7A2.25 2.25 0 0 1 9 7v3q1.5-2 3 0q1.5-2 3 0V7a2.25 2.25 0 0 1 4.5 0v11M4.25 18h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 18");
}

.yb5-eqq7q {
  d: path("M10 18v-3a2 2 0 0 1 4 0v3");
}
</style><g class="hntgybcog"><path class="o55hkijdf"/><path class="yb5-eqq7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bouncy-castle"} {...others} />);
}

export default Component;
