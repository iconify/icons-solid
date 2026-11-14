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

.jhkdm-b6g {
  d: path("M14 15.5s-2.5-2-2.5-4.25a2.5 2.5 0 0 1 5 0c0 2.25-2.5 4.25-2.5 4.25M2 12h7m-2-2l2 2l-2 2");
}

.sxpli1bbo {
  d: path("M7.505 8.25a7.5 7.5 0 1 1 0 7.5");
}
</style><g class="hntgybcog"><path class="sxpli1bbo"/><path class="jhkdm-b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:geofence-enter"} {...others} />);
}

export default Component;
