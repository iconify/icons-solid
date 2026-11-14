import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b407id0bp {
  d: path("M9.5 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.75 8.5l-3-3l-3.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-8kupsxn {
  d: path("m10.5 8.5l-1 5.5l2 3.5v4m-2-7.5L7 18l-2.5 2.5M15 18h6");
}
</style><g class="hntgybcog"><path class="b407id0bp"/><path class="i-8kupsxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:less-walking"} {...others} />);
}

export default Component;
