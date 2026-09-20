import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j68wzwbiz {
  d: path("M8 9a4 4 0 0 1 8 0");
}

.k6v6_yp7k {
  fill: currentColor;
  d: path("M4 9h16a3 3 0 0 1 0 10H4A3 3 0 0 1 4 9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oiiy8u_cj {
  d: path("M4 9h16a3 3 0 0 1 0 10H4A3 3 0 0 1 4 9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vxy4ztabh {
  d: path("M4 14h16");
}
</style><g class="s0phu2bbs"><path class="k6v6_yp7k"/><path class="oiiy8u_cj"/><path class="j68wzwbiz"/><path class="vxy4ztabh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:duffel-duotone-bold"} {...others} />);
}

export default Component;
