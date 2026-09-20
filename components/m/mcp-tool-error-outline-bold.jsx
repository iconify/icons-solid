import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6ppytj7e {
  d: path("M12 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-3l3 -3Z");
}

.kt6nhd-en {
  d: path("m10 12.5 4 4");
}

.kx9un1bco {
  d: path("m14 12.5 -4 4");
}

.oong2tffv {
  d: path("M12 5v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uormpdb9p {
  d: path("M9 5v5");
}

.yrwh_6bgk {
  d: path("M15 5v5");
}
</style><g class="s0phu2bbs"><path class="f6ppytj7e"/><path class="uormpdb9p"/><path class="oong2tffv"/><path class="yrwh_6bgk"/><path class="kt6nhd-en"/><path class="kx9un1bco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-tool-error-outline-bold"} {...others} />);
}

export default Component;
