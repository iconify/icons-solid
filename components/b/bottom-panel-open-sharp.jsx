import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v0olfu_gb {
  fill: currentColor;
  d: path("M8.827 11.596h6.346L12 8.404zM5 15h14V5H5zm-1 5V4h16v16z");
}
</style><path class="v0olfu_gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-panel-open-sharp"} {...others} />);
}

export default Component;
