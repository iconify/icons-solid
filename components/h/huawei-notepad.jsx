import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.malleql-h {
  width: 17.415px;
  height: 9.307px;
  x: 14.665px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.nr15-kblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.08 9.897h6.764a3 3 0 0 1 3 3V39.5a3 3 0 0 1-3 3H9.157a3 3 0 0 1-3-3V12.897a3 3 0 0 1 3-3h5.507");
}

.yvf78tbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.981 26.455h13.076");
}
</style><path class="nr15-kblk"/><rect class="malleql-h"/><path class="yvf78tbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-notepad"} {...others} />);
}

export default Component;
