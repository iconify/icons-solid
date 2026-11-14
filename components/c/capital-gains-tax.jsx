import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eo3yc4_-d {
  d: path("M15 4.5h5v5m-5.25 11.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqk2_ol2d {
  d: path("M3 14.5L8.5 9l3.5 3.5l8-8");
}
</style><g class="hntgybcog"><path class="uqk2_ol2d"/><path class="eo3yc4_-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:capital-gains-tax"} {...others} />);
}

export default Component;
