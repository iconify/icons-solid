import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8rry7ekn {
  d: path("m7 15.5l1.5 5h11l1.5-5");
}

.h_plg4s9u {
  d: path("m12.5 6.5l-3.75 4.75l-5.25-3l2-5.75Zm0 0Q14 8 14 10.5v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h_plg4s9u"/><path class="e8rry7ekn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gold-pour"} {...others} />);
}

export default Component;
