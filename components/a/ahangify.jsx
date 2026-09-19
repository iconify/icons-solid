import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mdxt7wb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.202 8.797A21.499 21.499 0 1 1 2.915 19.805A21.5 21.5 0 0 1 24.002 2.5");
}

.ucajbpihm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.733 23.999V2.827a21.5 21.5 0 0 1 8.599 3.561");
}

.zbg1897sa {
  cx: 24px;
  cy: 23.999px;
  r: 3.733px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="mdxt7wb_w"/><path class="ucajbpihm"/><circle class="zbg1897sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ahangify"} {...others} />);
}

export default Component;
