import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bq0_6ubvh {
  d: path("M2 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.bsqy413qs {
  d: path("M16 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.f77ctdb-m {
  d: path("M21 13.5v5");
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yhzmxzc3v {
  d: path("M3 13.5v5");
}
</style><g class="s0phu2bbs"><path class="bq0_6ubvh"/><path class="bsqy413qs"/><path class="ils7yp4cg"/><path class="yhzmxzc3v"/><path class="f77ctdb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:distance-to-outline-bold"} {...others} />);
}

export default Component;
