import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6fsd_bvk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11a7.75 4.75 0 0 0 15.5 0m-15.5 1.5h-1.5m17 0h1.5");
}

.ia-9icbzp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 11.5h.01m2.99-2h.01m2.49 2.75h.01m2.99-2h.01");
}

.ow5ni4xxv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11a7.75 4.75 0 0 1 15.5 0v3a7.75 4.75 0 0 1-15.5 0Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ow5ni4xxv"/><path class="a6fsd_bvk"/><path class="ia-9icbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:paella-sharp"} {...others} />);
}

export default Component;
