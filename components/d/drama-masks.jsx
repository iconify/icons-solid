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

.krbfcis-x {
  d: path("M4.75 10.5c1 1.5 2.5 1.5 3.5 0m7.5 6.5c1-1.5 2.5-1.5 3.5 0");
}

.o_b24ebdz {
  d: path("M2.5 4.5c2.5-1 5.5-1 8 0v5c0 3-1.5 5-4 5s-4-2-4-5Zm11 5c2.5-1 5.5-1 8 0v5c0 3-1.5 5-4 5s-4-2-4-5Z");
}
</style><g class="hntgybcog"><path class="o_b24ebdz"/><path class="krbfcis-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drama-masks"} {...others} />);
}

export default Component;
