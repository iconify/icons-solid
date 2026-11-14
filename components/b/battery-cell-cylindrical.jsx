import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aa_zn31rk {
  d: path("M6 7a6 2.25 0 0 1 12 0v11.75a6 2.25 0 0 1-12 0Z");
}

.gekkhac4j {
  d: path("M10.5 5V3h3v2M6 7a6 2.25 0 0 0 12 0M6 11a6 2.25 0 0 0 12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aa_zn31rk"/><path class="gekkhac4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:battery-cell-cylindrical"} {...others} />);
}

export default Component;
