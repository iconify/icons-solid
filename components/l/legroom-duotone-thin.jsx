import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.haq4atb7e {
  d: path("M6 2v11h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjoku5b6m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 2v11h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q26t8cbjw {
  d: path("M9 17v3");
}

.taxmbub4q {
  d: path("M6 17h12");
}

.tmm23ccef {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 17v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tyzts-xze {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 17v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vg9r0qb2v {
  d: path("M15 17v3");
}

.yzcdzmlnf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="mjoku5b6m"/><path class="yzcdzmlnf"/><path class="tmm23ccef"/><path class="tyzts-xze"/><path class="haq4atb7e"/><path class="taxmbub4q"/><path class="q26t8cbjw"/><path class="vg9r0qb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:legroom-duotone-thin"} {...others} />);
}

export default Component;
