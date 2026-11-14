import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.goiz_9b_e {
  d: path("M6.551 19.782a9.5 9.5 0 1 1 10.898 0M12 2.5v2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc8gkes1s {
  d: path("M8.5 15.5c0-5 2.5-7.25 7.25-7.25c0 4.75-2.25 7.25-7.25 7.25m0 0l-1 1");
}
</style><g class="hntgybcog"><path class="goiz_9b_e"/><path class="zc8gkes1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thermostat-eco"} {...others} />);
}

export default Component;
