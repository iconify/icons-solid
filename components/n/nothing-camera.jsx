import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.blfun_b6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33V15a3.46 3.46 0 0 0-3.42-3.5H8a3.46 3.46 0 0 0-3.5 3.42V33a3.46 3.46 0 0 0 3.42 3.5H40a3.46 3.46 0 0 0 3.5-3.42z");
}

.ukf7cv5sc {
  cx: 24px;
  cy: 24px;
  r: 6.85px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zz_h0qbmm {
  cx: 38.88px;
  cy: 16.06px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ukf7cv5sc"/><circle class="zz_h0qbmm"/><path class="blfun_b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nothing-camera"} {...others} />);
}

export default Component;
