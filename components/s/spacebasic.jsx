import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b42jckbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.667 30.167a6.167 6.167 0 1 0 0 12.333h24.667a6.167 6.167 0 1 0 0-12.333z");
}

.j24slubmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.026 7.306l24.667 24.667a6.167 6.167 0 0 1-8.72 8.72L7.305 16.028a6.167 6.167 0 0 1 8.72-8.72");
}

.t5bfysb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.667 5.5a6.167 6.167 0 1 0 0 12.333h24.667a6.167 6.167 0 1 0 0-12.333z");
}
</style><path class="t5bfysb3v"/><path class="j24slubmr"/><path class="b42jckbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:spacebasic"} {...others} />);
}

export default Component;
