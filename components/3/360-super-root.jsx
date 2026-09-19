import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mddfqbb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.709 24c2.992 0 5.418-2.436 5.418-5.44s-2.426-5.44-5.418-5.44H15.872m15.533 21.761v-6.166c0-2.604-2.102-4.715-4.696-4.715H15.872v10.881");
}
</style><rect class="j3s9ivbxi"/><path class="mddfqbb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:360-super-root"} {...others} />);
}

export default Component;
