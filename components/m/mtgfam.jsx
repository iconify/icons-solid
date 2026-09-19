import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dhl-w9f5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.454L4.5 19.622l7.448 22.924h24.104L43.5 19.622zm19.5 14.168L24 26.621m0-21.167v21.167M4.5 19.622L24 26.621M11.948 42.546L24 26.621m12.052 15.925L24 26.621");
}
</style><path class="dhl-w9f5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mtgfam"} {...others} />);
}

export default Component;
