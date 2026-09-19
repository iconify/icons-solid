import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e6g5ev1ue {
  cx: 39.145px;
  cy: 13.79px;
  r: 4.355px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qw3xuwahg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.145 38.565l-11.549-20.42l-11.548 20.42L4.5 18.145");
}
</style><path class="qw3xuwahg"/><circle class="e6g5ev1ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swissbankers"} {...others} />);
}

export default Component;
