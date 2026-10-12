import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp6_dhb1j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 2.75A4.25 4.25 0 0 1 21.25 7c0 3-4.25 6.5-4.25 6.5S12.75 10 12.75 7A4.25 4.25 0 0 1 17 2.75Z");
}

.lp474h64a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 7h.01M3.5 20.25h.01m3.49-.5h.01m2.74-2.25h.01m2.99-1.25h.01m2.99-.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="bp6_dhb1j"/><path class="lp474h64a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pilgrimage-route-sharp"} {...others} />);
}

export default Component;
