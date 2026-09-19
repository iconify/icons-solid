import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f7_ptbbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.57v14.596h9.709l12.152 9.379V6.63l-12.02 9.94zm39-10.468L7.802 41.898m28.086-27.847a12.09 12.09 0 0 1 0 19.805");
}
</style><path class="f7_ptbbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:adsilence"} {...others} />);
}

export default Component;
