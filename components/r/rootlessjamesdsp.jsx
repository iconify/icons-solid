import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k3ois4rut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.232 38.441V43.5m0-18.045V4.5");
}

.sbvlbrtvy {
  cx: 33.768px;
  cy: 16.052px;
  r: 6.493px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w8uvm7bkv {
  cx: 14.232px;
  cy: 31.948px;
  r: 6.493px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wbg_pdb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.768 9.559V4.5m0 18.045V43.5");
}
</style><circle class="w8uvm7bkv"/><path class="k3ois4rut"/><circle class="sbvlbrtvy"/><path class="wbg_pdb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rootlessjamesdsp"} {...others} />);
}

export default Component;
