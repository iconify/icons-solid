import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mvke1bbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a10.43 10.43 0 0 0-10.43 10.43c0 5 4.53 9 4.53 14.61m.22 9.66l11.58-2.04M24 4.5a10.43 10.43 0 0 1 10.43 10.43c0 5-4.53 9-4.53 14.61v8.06a5.9 5.9 0 0 1-11.8 0v-3.81l11.8-2.08");
}
</style><path class="mvke1bbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xperiaassist"} {...others} />);
}

export default Component;
