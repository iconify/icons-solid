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

.ryb47vbyp {
  d: path("M6 6h11.5a2.5 6 0 0 1 0 12H6m6.5-12v12");
}

.ysxclmd-n {
  d: path("M3.5 12a2.5 6 0 1 0 5 0a2.5 6 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ysxclmd-n"/><path class="ryb47vbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:newspaper-rolled"} {...others} />);
}

export default Component;
