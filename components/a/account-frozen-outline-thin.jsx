import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asjt_p6in {
  d: path("M10.5 15a1.5 1.5 0 0 1 3 0");
}

.cf2pd_8sh {
  d: path("M9 15h6v3H9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}
</style><g class="hntgybcog"><path class="mcubrkb2y"/><path class="cf2pd_8sh"/><path class="asjt_p6in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:account-frozen-outline-thin"} {...others} />);
}

export default Component;
