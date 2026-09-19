import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ik1ow8b_v {
  width: 18.974px;
  height: 37px;
  x: 14.513px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.795px;
  ry: 3.795px;
}

.pbeziybnf {
  width: 37px;
  height: 18.974px;
  x: 5.5px;
  y: 14.513px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.795px;
  ry: 3.795px;
}
</style><rect class="ik1ow8b_v"/><rect class="pbeziybnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:control-screen-orientation"} {...others} />);
}

export default Component;
