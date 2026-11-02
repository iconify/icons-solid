import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xy1t6yb2g {
  fill: currentColor;
  d: path("M13 4v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V4a1 1 0 0 1 2 0m5 15a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="xy1t6yb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plus-minus-fill-round"} {...others} />);
}

export default Component;
