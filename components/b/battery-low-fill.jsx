import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v6mu330ny {
  fill: currentColor;
  d: path("M5 6h11a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m2 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m15-4v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="v6mu330ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-low-fill"} {...others} />);
}

export default Component;
