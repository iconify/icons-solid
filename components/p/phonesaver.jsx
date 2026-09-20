import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ddef0ebaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.37 31.56H36a5 5 0 0 1-5 5h-7m10.92-15.45L24 30.52");
}

.s5yy5p9tc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.63 31.56H12a5 5 0 0 0 5 5h7m0-6.04V5.5M13.08 21.11L24 30.52m5.83-15.13H39l3.41 16.17A10.94 10.94 0 0 1 31.43 42.5H24");
}

.uobm3abij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.17 15.39H9L5.63 31.56A10.94 10.94 0 0 0 16.57 42.5H24");
}
</style><path class="uobm3abij"/><path class="s5yy5p9tc"/><path class="ddef0ebaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:phonesaver"} {...others} />);
}

export default Component;
