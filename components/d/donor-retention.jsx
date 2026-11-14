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

.szzt4pbza {
  d: path("M4 12.75a8 8 0 1 0 8-8");
}

.wi0yisbjf {
  d: path("m14 2.75l-2 2l2 2m-2 9.75l-3-3a2.12 2.12 0 0 1 3-3a2.12 2.12 0 0 1 3 3Z");
}
</style><g class="hntgybcog"><path class="szzt4pbza"/><path class="wi0yisbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:donor-retention"} {...others} />);
}

export default Component;
