import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j6v5-qbsu {
  d: path("M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.kj-obfgou {
  d: path("M9 22h6");
}

.naeroc6tm {
  d: path("M22 9v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvg4ydbao {
  d: path("M9 2h6");
}

.yc921jgtb {
  d: path("M2 9v6");
}
</style><g class="s0phu2bbs"><path class="j6v5-qbsu"/><path class="wvg4ydbao"/><path class="kj-obfgou"/><path class="yc921jgtb"/><path class="naeroc6tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:compute-outline-bold"} {...others} />);
}

export default Component;
