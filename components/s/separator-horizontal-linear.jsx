import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.duudpwbrb {
  d: path("M18 15L12 21L6 15");
}

.h0krthb9p {
  d: path("M18 9L12 3L6 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdk9_oksp {
  d: path("M2 12L22 12");
}
</style><g class="hntgybcog"><path class="duudpwbrb"/><path class="h0krthb9p"/><path class="xdk9_oksp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-horizontal-linear"} {...others} />);
}

export default Component;
