import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dqeuern5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v27.28h-13");
}

.h76tv_b5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.874 5.617h13a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713v23.28a4 4 0 0 1-4 4h-9");
}

.wfgglwhlb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 42.383h-9a4 4 0 0 1-4-4V9.617a4 4 0 0 1 4-4h.374a3 3 0 0 1 2.204.965l5.361 5.808a4 4 0 0 1 1.061 2.713z");
}
</style><path class="wfgglwhlb"/><path class="dqeuern5q"/><path class="h76tv_b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:metro2"} {...others} />);
}

export default Component;
