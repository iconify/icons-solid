import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gkbxc1b-u {
  width: 37px;
  height: 24px;
  x: 5.5px;
  y: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ng77ztbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 18.859v10.282h5.141m2.571-10.282v10.282m9.42-10.282l-3.406 10.282l-3.406-10.282M31.359 24h3.352m1.789 5.141h-5.141V18.859H36.5");
}
</style><rect class="gkbxc1b-u"/><path class="ng77ztbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:livetalk"} {...others} />);
}

export default Component;
