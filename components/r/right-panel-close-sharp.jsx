import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p7e0iacuy {
  fill: currentColor;
  d: path("M8.404 15.173L11.596 12L8.404 8.827zM5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="p7e0iacuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:right-panel-close-sharp"} {...others} />);
}

export default Component;
