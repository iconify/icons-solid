import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f2u3p_sgi {
  cx: 7.78px;
  cy: 11.922px;
  r: 3.28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i3wjx5b6h {
  width: 6.561px;
  height: 20.047px;
  x: 4.5px;
  y: 19.311px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.28px;
}

.vv2x70_ud {
  cx: 30.597px;
  cy: 26.455px;
  r: 12.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vv2x70_ud"/><rect class="i3wjx5b6h"/><circle class="f2u3p_sgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:io"} {...others} />);
}

export default Component;
