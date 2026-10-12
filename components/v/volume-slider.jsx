import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3xsjrbpo {
  cx: 14.25px;
  cy: 18.5px;
  r: 2.25px;
}

.akleju9by {
  d: path("M7.25 6.5a.9.9 0 0 1 .9-.9h1.32l2.64-2.22a.54.54 0 0 1 .9.42v8.4a.54.54 0 0 1-.9.42L9.47 10.4H8.15a.9.9 0 0 1-.9-.9ZM16 6a3 3 0 0 1 0 4M3.75 18.5H12m4.5 0h3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="akleju9by"/><circle class="a3xsjrbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:volume-slider"} {...others} />);
}

export default Component;
