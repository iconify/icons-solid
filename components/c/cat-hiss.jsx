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

.lr1eqgb9m {
  d: path("M5 9L3 5.5l4.5.5c1.5-1 7.5-1 9 0l4.5-.5L19 9c1 2 1 4 .5 6c-1 3.5-4 5.5-7.5 5.5s-6.5-2-7.5-5.5C4 13 4 11 5 9");
}

.w55ba02vu {
  d: path("M8.5 14h7c0 2.25-1.5 3.5-3.5 3.5S8.5 16.25 8.5 14m-1-4l2.5 1m6.5-1L14 11");
}
</style><g class="hntgybcog"><path class="lr1eqgb9m"/><path class="w55ba02vu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cat-hiss"} {...others} />);
}

export default Component;
