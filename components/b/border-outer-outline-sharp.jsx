import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s__g6yt1x {
  fill: currentColor;
  d: path("M5 19h14V5H5zm-2 2V3h18v18zm4-8v-2h2v2zm4 4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 4v-2h2v2z");
}
</style><path class="s__g6yt1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-outer-outline-sharp"} {...others} />);
}

export default Component;
