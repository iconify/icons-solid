import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j596vgebl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.313 7.622V42.5m0-17.439H27.54m-10.379-.314l9.982-17.125M27.54 42.5V25.061m4.967-10.319l5.004.035c2.581-.143 4.161-2.2 4.176-4.674s-2.142-4.65-4.536-4.602c-2.394.047-4.644 2.473-4.644 5.357z");
}
</style><path class="j596vgebl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kimi"} {...others} />);
}

export default Component;
