import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p2fgrym4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25 4.5H10.8v25.8c0 7.3 5.9 13.2 13.2 13.2s13.2-5.9 13.2-13.2V17.7m0-5.3V4.5h-7.6");
}
</style><path class="p2fgrym4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:urbansports"} {...others} />);
}

export default Component;
