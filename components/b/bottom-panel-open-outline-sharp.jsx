import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ryof_6pvt {
  fill: currentColor;
  d: path("M8.827 11.596h6.346L12 8.404zM5 19h14v-3H5zm0-4h14V5H5zm0 1v3zm-1 4V4h16v16z");
}
</style><path class="ryof_6pvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-panel-open-outline-sharp"} {...others} />);
}

export default Component;
