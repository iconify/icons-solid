import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx3gz59vk {
  d: path("M3.5 21C7 14 12 6.5 20 4.5m0 0c1 4 .5 7.5-1.5 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxzowlb4n {
  d: path("M16.75 17a1.75 2.5 0 1 0 3.5 0a1.75 2.5 0 1 0-3.5 0M5 15.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="fx3gz59vk"/><path class="yxzowlb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:angler-casting"} {...others} />);
}

export default Component;
