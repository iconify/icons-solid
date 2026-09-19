import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g2qvqqb-w {
  cx: 40.328px;
  cy: 35.225px;
  r: 3.172px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wac2npwnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.365l5.57-28.762l8.827 19.967l8.826-19.923l5.571 28.75");
}
</style><path class="wac2npwnj"/><circle class="g2qvqqb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:magister"} {...others} />);
}

export default Component;
