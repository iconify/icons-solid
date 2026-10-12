import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7sggvbej {
  d: path("M5.75 8.75H10m-4.25 6H10m3.25-3.5h4.25m-4.25 5h4.25m0-5.25c.25-2.5 1.75-4 3.75-4.5q-.375 3.375-3.75 4.5");
}

.chis5dbqg {
  width: 4.25px;
  height: 18.5px;
  x: 5.75px;
  y: 2.75px;
  rx: 1.25px;
}

.g7x6l_8xr {
  width: 4.25px;
  height: 15px;
  x: 13.25px;
  y: 6.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="chis5dbqg"/><rect class="g7x6l_8xr"/><path class="c7sggvbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bamboo"} {...others} />);
}

export default Component;
