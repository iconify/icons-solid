import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.urkqhvbky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.637 30.727h4.205a8.41 8.41 0 0 0 0-16.818H14.75v12.614a4.205 4.205 0 0 1-4.205 4.204H6.341V5.5h18.5c9.29 0 16.819 7.53 16.819 16.818s-7.53 16.818-16.818 16.818H11.436L6.34 42.5v-3.364");
}
</style><path class="urkqhvbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dhaaga"} {...others} />);
}

export default Component;
