import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sopf26b8b {
  fill: currentColor;
  d: path("M3 21V11h2v8h14V5h-8V3h10v18zM3 9V7h2v2zm0-4V3h2v2zm4 8v-2h2v2zm0-8V3h2v2zm4 8v-2h2v2zm0-4V7h2v2z");
}
</style><path class="sopf26b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:low-density-outline"} {...others} />);
}

export default Component;
