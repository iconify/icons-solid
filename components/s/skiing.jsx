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

.r4nh24c8a {
  d: path("m9.5 7.75l2 5L14 15l-1.75 3.4M10 9.25l3.75.5L16 12m-.75-1.5L17 17M3.75 15.5L20 21");
}

.ywh8odbvx {
  cx: 8.25px;
  cy: 5px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="ywh8odbvx"/><path class="r4nh24c8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skiing"} {...others} />);
}

export default Component;
