import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjhbo82aw {
  d: path("M18 21V8.5a4.25 4.25 0 0 0-8.5 0v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkjl5qelv {
  d: path("m6 12l3.5 3.5L13 12");
}
</style><g class="hntgybcog"><path class="cjhbo82aw"/><path class="wkjl5qelv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-left-u-turn"} {...others} />);
}

export default Component;
