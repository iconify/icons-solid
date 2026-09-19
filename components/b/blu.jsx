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

.tu6khob6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.46 19.712v5.808a3.52 3.52 0 0 0 3.52 3.52h0a3.52 3.52 0 0 0 3.52-3.52v-5.808m0 5.808v3.521M23.438 14.96v12.32c0 .973.788 1.76 1.76 1.76h.528M12.5 23.232a3.52 3.52 0 0 1 3.52-3.52h0a3.52 3.52 0 0 1 3.52 3.52v2.288a3.52 3.52 0 0 1-3.52 3.52h0a3.52 3.52 0 0 1-3.52-3.52m0 3.521V14.959");
}
</style><path class="tu6khob6b"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blu"} {...others} />);
}

export default Component;
