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

.ksiibsbdf {
  width: 16.5px;
  height: 15px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}

.wkawsbbrw {
  d: path("M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5m-8.25 8h8.5m-6.5-2l-2 2l2 2m4.5-4l2 2l-2 2");
}
</style><g class="hntgybcog"><rect class="ksiibsbdf"/><path class="wkawsbbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:calendar-range"} {...others} />);
}

export default Component;
