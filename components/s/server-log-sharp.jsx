import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bil9-rkpq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 7h.01m2.99 0h.01");
}

.kijy6ccde {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.5h16.5m-16.5 3.25h12.5M3.75 21h8");
}

.teytvx9mh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v7.5H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="teytvx9mh"/><path class="bil9-rkpq"/><path class="kijy6ccde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:server-log-sharp"} {...others} />);
}

export default Component;
