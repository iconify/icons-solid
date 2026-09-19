import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ohqzv-bfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 30.167H5.5L17.833 42.5H5.5v-37l12.333 12.333H5.5L30.167 42.5m0 0H42.5L30.167 30.167");
}
</style><path class="ohqzv-bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:passwdsafe"} {...others} />);
}

export default Component;
