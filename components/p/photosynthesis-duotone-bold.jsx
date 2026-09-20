import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1_au8jbg {
  d: path("m20 9 -3 3");
}

.hkn75vgei {
  fill: currentColor;
  d: path("M6 20c0 -9 5.4 -12.6 12.6 -12.6C18.6 14.6 11.4 20 6 20");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lbl-xgx4l {
  d: path("M6 20c0 -9 5.4 -12.6 12.6 -12.6C18.6 14.6 11.4 20 6 20");
}

.lc7bb5w9b {
  d: path("m20 4 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xbaewdsnx {
  d: path("m16 4 -4 4");
}
</style><g class="s0phu2bbs"><path class="hkn75vgei"/><path class="lbl-xgx4l"/><path class="xbaewdsnx"/><path class="lc7bb5w9b"/><path class="e1_au8jbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:photosynthesis-duotone-bold"} {...others} />);
}

export default Component;
