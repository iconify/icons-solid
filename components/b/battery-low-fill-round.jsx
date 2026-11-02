import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flw1gabej {
  fill: currentColor;
  d: path("M6 6h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m1 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m15-4v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="flw1gabej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-low-fill-round"} {...others} />);
}

export default Component;
