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

.konffhqhd {
  d: path("M6 6.5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2V12a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.rjb_q9q1l {
  d: path("M10 4.5V2h4v2.5");
}
</style><g class="hntgybcog"><path class="konffhqhd"/><path class="rjb_q9q1l"/><path class="pmuiqo95v"/><path class="oqfv9rb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:baggage-claim-outline-thin"} {...others} />);
}

export default Component;
