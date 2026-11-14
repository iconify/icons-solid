import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecu3uoboo {
  d: path("M4.5 18a8.75 8.75 0 1 1 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0t_jfbfk {
  d: path("M5 15.5L4.5 18L2 17.5m6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V11m0 0l3 1.5");
}
</style><g class="hntgybcog"><path class="ecu3uoboo"/><path class="l0t_jfbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:encore"} {...others} />);
}

export default Component;
