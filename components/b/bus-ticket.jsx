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

.lpg1blbuv {
  d: path("M8.5 10.5h3A1.5 1.5 0 0 1 13 12v.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 12.5V12a1.5 1.5 0 0 1 1.5-1.5m7.5 0h1.5");
}

.ur1t5-hgg {
  d: path("M3 8h18v3a1.5 1.5 0 0 0 0 3v3H3v-3a1.5 1.5 0 0 0 0-3Z");
}
</style><g class="hntgybcog"><path class="ur1t5-hgg"/><path class="lpg1blbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bus-ticket"} {...others} />);
}

export default Component;
