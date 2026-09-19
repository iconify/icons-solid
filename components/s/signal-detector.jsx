import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n0577s69b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 26.585h5.207l2.652-4.146l4.504 10.752l4.709-18.382l6.093 15.825l5.96-10.882l4.744 6.802H43.5");
}
</style><path class="n0577s69b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:signal-detector"} {...others} />);
}

export default Component;
