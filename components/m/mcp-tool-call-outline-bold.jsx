import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6ppytj7e {
  d: path("M12 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-3l3 -3Z");
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

.u98_rdemn {
  d: path("m12.5 13 2 2 -2 2");
}

.uormpdb9p {
  d: path("M9 5v5");
}

.v7ievg3-e {
  d: path("M9.5 15h5");
}

.yrwh_6bgk {
  d: path("M15 5v5");
}
</style><g class="s0phu2bbs"><path class="f6ppytj7e"/><path class="uormpdb9p"/><path class="oong2tffv"/><path class="yrwh_6bgk"/><path class="v7ievg3-e"/><path class="u98_rdemn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-tool-call-outline-bold"} {...others} />);
}

export default Component;
