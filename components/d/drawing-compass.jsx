import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1nvq6bbq {
  cx: 12px;
  cy: 5.75px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4doyybfm {
  d: path("M10.75 7.75L5.75 21m7.5-13.25l5 13.25m-11.5-5.5c3.25 1.75 7.25 1.75 10.5 0");
}
</style><g class="hntgybcog"><circle class="h1nvq6bbq"/><path class="k4doyybfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drawing-compass"} {...others} />);
}

export default Component;
