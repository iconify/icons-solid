import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqs531bhw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7.75a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 1 1 0-8.5");
}

.ox05rfewb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w_8vmacqn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 12h.01");
}

.y8-9lwbtm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 8h2.5v4H16zm0 7.75h2.5");
}
</style><g class="ux2u0rbkq"><path class="ox05rfewb"/><path class="lqs531bhw"/><path class="w_8vmacqn"/><path class="y8-9lwbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:power-supply-sharp"} {...others} />);
}

export default Component;
