import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-d-7ugtm {
  d: path("M9 17V7h3.5a2.75 2.75 0 0 1 0 5.5H9m3.5 0l3 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8-ag_e6f {
  d: path("M4 3v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3");
}
</style><g class="hntgybcog"><path class="r8-ag_e6f"/><path class="b-d-7ugtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parking-bay-reserved"} {...others} />);
}

export default Component;
