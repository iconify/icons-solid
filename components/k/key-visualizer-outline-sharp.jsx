import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.po936wbwp {
  fill: currentColor;
  d: path("M3 21v-2h3v2zm0-4v-2h8v2zm0-4v-2h18v2zm0-4V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zM8 5V3h3v2zm5 16v-2h3v2zm0-4v-2h8v2zm0-8V7h8v2zm0-4V3h3v2zm5 16v-2h3v2zm0-16V3h3v2z");
}
</style><path class="po936wbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:key-visualizer-outline-sharp"} {...others} />);
}

export default Component;
