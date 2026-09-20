import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpvrwwhil {
  d: path("M5 9h8");
}

.g3eaxfafx {
  d: path("m15 15 2 2 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i00vfab_y {
  d: path("m15 9 2 2 3 -3");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zrqurcb-a {
  d: path("M5 15h8");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="dpvrwwhil"/><path class="i00vfab_y"/><path class="zrqurcb-a"/><path class="g3eaxfafx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:scorecard-outline-thin"} {...others} />);
}

export default Component;
