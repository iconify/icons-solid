import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7n1b4iis {
  fill: currentColor;
  d: path("M3 19v-2h18v2zm0-4v-2h18v2zm0-4V9h18v2zm0-4V5h18v2z");
}
</style><path class="c7n1b4iis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reorder-outline"} {...others} />);
}

export default Component;
