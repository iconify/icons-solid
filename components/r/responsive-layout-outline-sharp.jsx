import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iivqedcba {
  fill: currentColor;
  d: path("M4 20V9h5V4h11v16zm11-1h4V5h-9v4h5zm-5 0h4v-9h-4zm-5 0h4v-9H5zM15 9v1zm0 0");
}
</style><path class="iivqedcba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:responsive-layout-outline-sharp"} {...others} />);
}

export default Component;
