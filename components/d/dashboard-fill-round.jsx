import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmcmv3y4h {
  fill: currentColor;
  d: path("M6 3h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m10 0h2a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6m0 8h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3M6 15h2a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6");
}
</style><path class="fmcmv3y4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dashboard-fill-round"} {...others} />);
}

export default Component;
