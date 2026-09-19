import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lu6ur6bwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.009 20.978a8.18 8.18 0 0 0 4.179-7.136a8.188 8.188 0 0 0-16.376 0a8.18 8.18 0 0 0 4.18 7.135C19.986 37.515 6.63 35.257 5.5 42.347h37c-1.13-7.09-14.486-4.832-14.491-21.368");
}
</style><path class="lu6ur6bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bg-stats"} {...others} />);
}

export default Component;
