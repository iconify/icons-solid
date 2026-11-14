import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boj3k0b7v {
  d: path("M4 20.5c1.5-4 14.5-4 16 0Z");
}

.e0w4zj40u {
  d: path("M12 17.5v-7c0-4 2.5-6.5 7-6.5c0 4-2.5 6.5-7 6.5m0 3c-4 0-7-2-7-6c4 0 6.5 2 7 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="boj3k0b7v"/><path class="e0w4zj40u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spring-sprout"} {...others} />);
}

export default Component;
