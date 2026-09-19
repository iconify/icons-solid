import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c7d169_1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.07 35.131a18.5 18.5 0 1 1 18.818 7.164");
}

.pcfp02bmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.068 29.54a12.26 12.26 0 1 0 17.78-14.498");
}

.ps_oqubjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.908 29.54a7.973 7.973 0 1 0-10.664-.077m-.335-15.119a10.416 10.416 0 0 0-6.803 15.197");
}

.r_jvwxbgc {
  cx: 24.619px;
  cy: 24.745px;
  r: 3.268px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="r_jvwxbgc"/><path class="ps_oqubjr"/><path class="pcfp02bmz"/><path class="c7d169_1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blackhole"} {...others} />);
}

export default Component;
