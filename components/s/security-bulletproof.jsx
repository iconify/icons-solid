import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dkeod_bvf {
  d: path("M10 11L9 8.5l1.5-3m1 6.5l3-1.5l3 .5M11 13.75l2.5 1.75l1 3m-6-5.5L6 15.5L5.5 18m3-6l-3-2.5m9.5-4h3.5M17 8h1.5");
}

.e022up45g {
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875V5.125A2.625 2.625 0 0 1 5.125 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzao81bey {
  d: path("M8.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="e022up45g"/><path class="vzao81bey"/><path class="dkeod_bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:security-bulletproof"} {...others} />);
}

export default Component;
