import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rvl167b8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.538 30.189C35.538 36.996 30.372 42.5 24 42.5s-11.538-5.518-11.538-12.325c0 0-.126-8.272 9.609-23.233c0 0 1.826-3.104 3.665-.204c9.735 14.961 9.801 23.45 9.801 23.45");
}
</style><path class="rvl167b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-droplet"} {...others} />);
}

export default Component;
