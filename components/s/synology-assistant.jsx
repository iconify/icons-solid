import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kz5yf3b0u {
  width: 37px;
  height: 33.172px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.252px;
}

.onp4ozbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.828 5.5v33.172m5.762-26.447h3.148m-3.148 5.08h3.148M8.129 38.672h5.103V42.5H8.129zm26.74 0h5.103V42.5h-5.103z");
}
</style><rect class="kz5yf3b0u"/><path class="onp4ozbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:synology-assistant"} {...others} />);
}

export default Component;
