import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhjn901nq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 8.25h.01m-.01 3.25h.01");
}

.mhdy_xufl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.75h8.5v2.5h-8.5zm2 2.5h6V9l1.42.47l3.16 1.06l1.42.47l1.14.98l1.22 1.04l1.14.98v3.25h-17v-12z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x0zlakb7m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 17.25h17.5v4H3.25zm4.25 4V19.5m4.5 1.75V19.5m4.5 1.75V19.5");
}
</style><g class="ux2u0rbkq"><path class="mhdy_xufl"/><path class="jhjn901nq"/><path class="x0zlakb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hiking-boot-sharp"} {...others} />);
}

export default Component;
