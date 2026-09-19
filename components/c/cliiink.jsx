import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bsrbutqhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.264 24.316C21.3 16.478.376 46.492 15.169 37.95m4.695-16.477c14.037-7.838-6.887 22.176 7.906 13.635m4.694-16.478c14.037-7.838-6.887 22.176 7.906 13.635");
}

.dk6hueakx {
  cx: 25.767px;
  cy: 13.12px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rd5b_ccsj {
  cx: 13.298px;
  cy: 15.236px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wtmz54gnq {
  cx: 38.236px;
  cy: 11.005px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wtmz54gnq"/><circle class="dk6hueakx"/><circle class="rd5b_ccsj"/><path class="bsrbutqhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cliiink"} {...others} />);
}

export default Component;
