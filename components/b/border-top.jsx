import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvxr7ytds {
  fill: currentColor;
  d: path("M3 21v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h18v2zm4 16v-2h2v2zm0-8v-2h2v2zm4 8v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zm0-8v-2h2v2zm4 8v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z");
}
</style><path class="bvxr7ytds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:border-top"} {...others} />);
}

export default Component;
