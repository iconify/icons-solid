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

.w85tshbjf {
  d: path("M3.5 3v17.5h8.9");
}

.yzeufcbot {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-1.789 11.191l1.836.988a1.5 1.5 0 0 1 0 2.642l-1.836.988A1.5 1.5 0 0 1 15 18.989v-1.978a1.5 1.5 0 0 1 2.211-1.32");
}
</style><g class="hntgybcog"><path class="w85tshbjf"/><path class="yzeufcbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-play"} {...others} />);
}

export default Component;
