import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsc54w4zs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15.75h3");
}

.f-g423b1q {
  width: 6.5px;
  height: 4.5px;
  x: 5.75px;
  y: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.lo_lt5b5d {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z4w9axbqd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 8.25h.01m2.99 0h.01M15 12h.01M18 12h.01M15 15.75h.01m2.99 0h.01");
}
</style><g class="y9tr6bcfx"><rect class="lo_lt5b5d"/><rect class="f-g423b1q"/><path class="z4w9axbqd"/><path class="bsc54w4zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:alarm-panel"} {...others} />);
}

export default Component;
