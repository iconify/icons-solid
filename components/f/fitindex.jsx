import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gmfznxbty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.857 9.255L4.5 28.613m39 7.929L23.857 16.646V9.255L43.5 29.151zm-19.459 2.203L13.027 27.477v-7.391l11.014 11.268z");
}
</style><path class="gmfznxbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fitindex"} {...others} />);
}

export default Component;
