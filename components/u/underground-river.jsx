import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgro9ib7n {
  d: path("M4 20v-7a8 8 0 0 1 16 0v7M2.5 20h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkjzt8oaq {
  d: path("M7.5 12.5q1.5-1 3 0t3 0t3 0m-9 4q1.5-1 3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="dgro9ib7n"/><path class="vkjzt8oaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:underground-river"} {...others} />);
}

export default Component;
