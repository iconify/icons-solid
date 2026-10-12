import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kp14pq1-j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.5h8.5v7h-8.5zM5 20.25h15v-1c0-3.2-3.6-5.25-8-5.25s-8 2.05-8 5.25v1zM12 4.5V2.75");
}

.r4phunq2g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 8h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="kp14pq1-j"/><path class="r4phunq2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bot-sharp"} {...others} />);
}

export default Component;
