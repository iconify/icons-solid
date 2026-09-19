import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lp5qi3bzm {
  width: 4.776px;
  height: 4.776px;
  x: 14.939px;
  y: 18.494px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.973px;
  ry: 1.973px;
}

.p6k5d7y9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.295 5.918h29.41A3.787 3.787 0 0 1 42.5 9.713v21.82a3.787 3.787 0 0 1-3.795 3.795H13.173c-2.102 0-7.673 8.523-7.673 6.42V9.714a3.787 3.787 0 0 1 3.795-3.795");
}

.pe0tllber {
  width: 4.776px;
  height: 4.776px;
  x: 28.285px;
  y: 18.494px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.973px;
  ry: 1.973px;
}

.wiko1sbqu {
  width: 4.776px;
  height: 4.776px;
  x: 21.612px;
  y: 18.494px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.973px;
  ry: 1.973px;
}
</style><path class="p6k5d7y9v"/><rect class="wiko1sbqu"/><rect class="lp5qi3bzm"/><rect class="pe0tllber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xposedsmscode"} {...others} />);
}

export default Component;
