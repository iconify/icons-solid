import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yi6wtbbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30 15l-12.1 6.07m0 5.86l12.18 6.11m12.42 2.89a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0m-.1-23.86a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0M18.6 24a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0");
}
</style><path class="yi6wtbbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:share"} {...others} />);
}

export default Component;
