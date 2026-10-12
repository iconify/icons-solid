import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ec8d632vc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 14.25h.01m2.99 0h.01m2.99 0h.01M9 17.5h.01m2.99 0h.01m2.99 0h.01");
}

.s308zmbxx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 7.25v-4h9.5v4m-11.5 0h13.5v14H5.25zm3.25 3.5h7");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="s308zmbxx"/><path class="ec8d632vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pin-pad-sharp"} {...others} />);
}

export default Component;
