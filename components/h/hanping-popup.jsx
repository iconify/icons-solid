import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iok58zbkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.944H15.778C10.1 21.944 5.5 26.546 5.5 32.222S10.102 42.5 15.778 42.5s10.278-4.601 10.278-10.278V5.5");
}
</style><path class="iok58zbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hanping-popup"} {...others} />);
}

export default Component;
