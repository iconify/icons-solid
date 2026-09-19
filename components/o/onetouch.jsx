import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l3vagbb4b {
  cx: 28.593px;
  cy: 19.183px;
  r: 13.052px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nc5br2wvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.645 23.746c1.859 9.807 9.578 17.526 19.385 19.384");
}
</style><circle class="l3vagbb4b"/><path class="nc5br2wvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:onetouch"} {...others} />);
}

export default Component;
