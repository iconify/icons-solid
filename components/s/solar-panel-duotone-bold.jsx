import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0f5ny81l {
  d: path("M5 20h8");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1r4963pp {
  d: path("m4 14 6 -6h10l-6 6Z");
}

.vn6-6774p {
  fill: currentColor;
  d: path("m4 14 6 -6h10l-6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wcigoab1j {
  d: path("M9 14v6");
}
</style><g class="s0phu2bbs"><path class="vn6-6774p"/><path class="s1r4963pp"/><path class="s09hy0b0y"/><path class="wcigoab1j"/><path class="m0f5ny81l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:solar-panel-duotone-bold"} {...others} />);
}

export default Component;
