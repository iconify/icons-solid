import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h-evtwb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.018 24.925h8.33m-13.683.802l5.89-5.89m3.628 17.659V24.925m9.753 9.428a3.143 3.143 0 0 1-6.287 0V32.31a3.143 3.143 0 0 1 6.287 0m0 5.186v-8.328m3.277 3.143a3.143 3.143 0 0 1 6.287 0v2.043a3.143 3.143 0 0 1-6.287 0m0 3.142V24.925");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="h-evtwb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tab"} {...others} />);
}

export default Component;
