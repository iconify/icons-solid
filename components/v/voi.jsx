import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.arbnqacnn {
  cx: 38.33px;
  cy: 32.252px;
  r: 4.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ovhu0zb3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 11.755h7.453l7.01 16.77l7.276-16.947h6.92L23.601 36.422H15.97z");
}
</style><path class="ovhu0zb3j"/><circle class="arbnqacnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:voi"} {...others} />);
}

export default Component;
