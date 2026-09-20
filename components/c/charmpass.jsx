import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a51okmvms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.043 42.5H9.5c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4h17.457m4 0H38.5c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4H21.043");
}

.p6vqqbwzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.375 27.54v.088c0 3.933-3.302 7.122-7.375 7.122s-7.375-3.188-7.375-7.122v-7.256c0-3.933 3.302-7.122 7.375-7.122s7.375 3.188 7.375 7.122v.088");
}
</style><path class="a51okmvms"/><path class="p6vqqbwzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:charmpass"} {...others} />);
}

export default Component;
