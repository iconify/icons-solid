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

.nvwx38fgg {
  d: path("M9 13.5v-3L12 7h4l3.5 2.75l2 .75v3Z");
}

.tctrb19rf {
  d: path("M10 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 8h3.75M3.5 11h2.75M2.5 14h3.75");
}
</style><g class="hntgybcog"><path class="nvwx38fgg"/><path class="tctrb19rf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-0-100"} {...others} />);
}

export default Component;
