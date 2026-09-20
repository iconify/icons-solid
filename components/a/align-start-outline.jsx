import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax2hqfbxb {
  fill: currentColor;
  d: path("M2 4V2h20v2zm5 6V7h10v3zm0 6v-3h10v3z");
}
</style><path class="ax2hqfbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-start-outline"} {...others} />);
}

export default Component;
