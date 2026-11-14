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

.l1orr011i {
  d: path("M8.5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.25 7.75h5.5m1.08-10.964a5 5 0 0 1 0 6.428m-7.66 0a5 5 0 0 1 0-6.428M18 14.5V18m0 3h.01");
}

.uicsycbis {
  d: path("M4.5 19.5L10 7l5.5 12.5");
}
</style><g class="hntgybcog"><path class="uicsycbis"/><path class="l1orr011i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:broadcast-tower-alert"} {...others} />);
}

export default Component;
