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

.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}

.ro66i3beg {
  d: path("m2 9l3 3l3-3m5 7s-3.5-3-3.5-5.25a3.5 3.5 0 0 1 7 0C16.5 13 13 16 13 16");
}
</style><g class="hntgybcog"><path class="mk5xfob2d"/><path class="ro66i3beg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:location-history"} {...others} />);
}

export default Component;
