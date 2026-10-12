import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n87c6hbsj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v18.5H3.75zm3.5 0v18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vu-e9cbtj {
  cx: 13.75px;
  cy: 12px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvzerlwtb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 12h.01");
}
</style><g class="ux2u0rbkq"><path class="n87c6hbsj"/><circle class="vu-e9cbtj"/><path class="xvzerlwtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dvd-case-sharp"} {...others} />);
}

export default Component;
