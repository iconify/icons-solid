import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lbi_dn5ty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.762 15.562a3.356 3.356 0 0 1 0-6.712h10.476a3.356 3.356 0 0 1 0 6.712z");
}

.x_ssngb7v {
  width: 22.96px;
  height: 39px;
  x: 12.52px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="x_ssngb7v"/><path class="lbi_dn5ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-pixel"} {...others} />);
}

export default Component;
