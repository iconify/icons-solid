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

.pudhj47xv {
  d: path("m7.49 15.15l1.64-1.14l-.72-1.02l1.44 2.04l-.72-1.02L12 12l-.72-1.02l1.44 2.04L12 12l2.87-2.01l-.72-1.02l1.44 2.04l-.72-1.02l1.64-1.14");
}

.yp5baw0fy {
  d: path("M4.63 17.16A9 5.5-35 1 1 19.37 6.84A9 5.5-35 1 1 4.63 17.16");
}
</style><g class="hntgybcog"><path class="yp5baw0fy"/><path class="pudhj47xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rugby-ball"} {...others} />);
}

export default Component;
