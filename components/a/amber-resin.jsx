import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxebeybus {
  d: path("M4 3h16m-8 0c-2.5 4-6 8-6 11.5a6 6 0 0 0 12 0C18 11 14.5 7 12 3Z");
}

.r2_oy0arb {
  d: path("M9 16q0-2.5 1.75-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gxebeybus"/><path class="r2_oy0arb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:amber-resin"} {...others} />);
}

export default Component;
