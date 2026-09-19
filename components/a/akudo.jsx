import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ohfx7e__b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 11.496l-9.905 8.977L24 34.58l9.905-14.107zM24 3.5v41");
}

.zrz621bse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5L5.273 20.473h37.454zm18.727 16.973L24 44.5L5.273 20.473");
}
</style><path class="zrz621bse"/><path class="ohfx7e__b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:akudo"} {...others} />);
}

export default Component;
