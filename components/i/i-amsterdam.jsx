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

.ok4a60b-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.193 18.75v11m16.533-4.86a2.75 2.75 0 1 1 5.5 0v4.538m-5.5-7.287v7.287m5.5-4.538a2.75 2.75 0 1 1 5.5 0v4.538m-14.017-2.632a2.75 2.75 0 1 1-5.5 0v-1.787a2.75 2.75 0 1 1 5.5 0m0 4.537v-7.287");
}
</style><rect class="j3s9ivbxi"/><path class="ok4a60b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:i-amsterdam"} {...others} />);
}

export default Component;
