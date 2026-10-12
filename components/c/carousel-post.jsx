import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iquioebke {
  width: 15px;
  height: 13.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.lspu6ymit {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.25 6v7.25M6 12.75L9 9.5l2.25 2.25l1.5-1.5l2.25 2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ymzp3_bfp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 20h.01m2.99 0h.01m2.99 0h.01");
}
</style><g class="y9tr6bcfx"><rect class="iquioebke"/><path class="lspu6ymit"/><path class="ymzp3_bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:carousel-post"} {...others} />);
}

export default Component;
