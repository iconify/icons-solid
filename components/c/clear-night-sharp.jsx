import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5dzy6brl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8a4.5 4.5 0 0 0 6 6a6 6 0 1 1-6-6Z");
}

.pncdzlbgq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 4.5h.01m8.49.25h.01M20 11h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="e5dzy6brl"/><path class="pncdzlbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clear-night-sharp"} {...others} />);
}

export default Component;
