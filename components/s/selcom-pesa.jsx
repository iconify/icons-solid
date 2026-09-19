import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jp9ecpztv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 34.5v4c0 2.216 1.784 4 4 4h29c2.216 0 4-1.784 4-4v-21H21a3 3 0 0 0-3 3v.5a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v.5a3 3 0 0 1-3 3H5.5v-21c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4v4");
}
</style><path class="jp9ecpztv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:selcom-pesa"} {...others} />);
}

export default Component;
