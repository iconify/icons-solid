import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxhu6xblw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 7h.01");
}

.lsn2tqqve {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 10h.01M8.5 7.75h.01M10.5 6.5h.01");
}

.rdphckbwh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 13.25v2.5");
}

.v5sqv6byn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 2.75A4.25 4.25 0 0 1 21.25 7c0 3.1-4.25 6.75-4.25 6.75S12.75 10.1 12.75 7A4.25 4.25 0 0 1 17 2.75");
}

.wq9zaibrp {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="wq9zaibrp"/><path class="rdphckbwh"/><path class="lsn2tqqve"/><path class="v5sqv6byn"/><path class="fxhu6xblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shipment-tracking"} {...others} />);
}

export default Component;
