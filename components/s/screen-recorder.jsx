import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g3dl0xb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.8 27.71l8.32 7.37A1.43 1.43 0 0 0 43.5 34V14a1.43 1.43 0 0 0-2.38-1.07l-8.32 7.36");
}

.qzcjynb7s {
  width: 28.3px;
  height: 25.12px;
  x: 4.5px;
  y: 11.44px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.49px;
}
</style><rect class="qzcjynb7s"/><path class="g3dl0xb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:screen-recorder"} {...others} />);
}

export default Component;
