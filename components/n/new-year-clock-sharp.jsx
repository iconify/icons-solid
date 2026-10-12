import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_3y1e_gc {
  cx: 11.5px;
  cy: 13.75px;
  r: 7.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.camndabwv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.31 7.28l2.13 1.79l.46.38l.21-.56l1.93-5.08l.21-.56l-.5.34l-4.4 2.97l-.5.34z");
}

.cueqsyb3v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 13.75v-5m0 5V10");
}

.tq0y9obbf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 13.75h.01m-5.01 5h.01m-5.01-5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="a_3y1e_gc"/><path class="cueqsyb3v"/><path class="tq0y9obbf"/><path class="camndabwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:new-year-clock-sharp"} {...others} />);
}

export default Component;
