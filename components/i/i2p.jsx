import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j0edcsbhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.758 33.491a15.425 15.425 0 1 1 4.034 1.469");
}

.mr7-fm33t {
  cx: 29.806px;
  cy: 16.85px;
  r: 4.49px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oyecndb_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.181 20.472a1.928 1.928 0 1 1 1.934.82m-10.951.718a1.928 1.928 0 1 1 1.932-.573m-3.338 12.054l-2.827 8.484l4.034 1.469l2.827-8.484");
}

.ylyhen_ut {
  cx: 17.842px;
  cy: 17.566px;
  r: 4.49px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="j0edcsbhd"/><circle class="ylyhen_ut"/><circle class="mr7-fm33t"/><path class="oyecndb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:i2p"} {...others} />);
}

export default Component;
