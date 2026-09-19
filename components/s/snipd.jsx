import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lqjrtpm_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.9 33.1c-6.6-6.6-6.6-17.2 0-23.7s17.2-6.6 23.7 0zM33.1 15c6.6 6.6 6.6 17.2 0 23.7s-17.2 6.6-23.7 0z");
}
</style><path class="lqjrtpm_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:snipd"} {...others} />);
}

export default Component;
