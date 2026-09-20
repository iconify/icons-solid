import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.mprhlt90i {
  d: path("M3 4v13h18V4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sgps_g3sy {
  fill: currentColor;
  d: path("M3 4v13h18V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sutfpibts {
  fill: currentColor;
  d: path("M9 8h6v5H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wneoubc6n {
  d: path("M7 21h10");
}

.yb9iu4bmw {
  d: path("M9 8h6v5H9Z");
}
</style><g class="s0phu2bbs"><path class="sgps_g3sy"/><path class="sutfpibts"/><path class="mprhlt90i"/><path class="yb9iu4bmw"/><path class="ffs26fbkv"/><path class="wneoubc6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:video-game-duotone-bold"} {...others} />);
}

export default Component;
