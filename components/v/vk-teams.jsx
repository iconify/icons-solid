import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o4ai9hbpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 5.5a6 6 0 0 0-4.242 1.758l-5 5a6 6 0 0 0 0 8.484a6 6 0 0 0 8.484 0l5-5a6 6 0 0 0 0-8.484A6 6 0 0 0 36.5 5.5m-25.001 0a6 6 0 0 1 4.242 1.758l5 5a6 6 0 0 1 0 8.484a6 6 0 0 1-8.484 0l-5-5a6 6 0 0 1 0-8.484A6 6 0 0 1 11.499 5.5m25.002 37a6 6 0 0 1-4.242-1.758l-5-5a6 6 0 0 1 0-8.484a6 6 0 0 1 8.484 0l5 5a6 6 0 0 1 0 8.484a6 6 0 0 1-4.242 1.758m-25.001 0a6 6 0 0 0 4.242-1.758l5-5a6 6 0 0 0 0-8.484a6 6 0 0 0-8.484 0l-5 5a6 6 0 0 0 0 8.484A6 6 0 0 0 11.5 42.5");
}
</style><path class="o4ai9hbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vk-teams"} {...others} />);
}

export default Component;
