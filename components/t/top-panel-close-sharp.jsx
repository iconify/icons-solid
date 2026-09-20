import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ug3jopbdm {
  fill: currentColor;
  d: path("M8.827 15.596h6.346L12 12.404zM5 19h14V9H5zm-1 1V4h16v16z");
}
</style><path class="ug3jopbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:top-panel-close-sharp"} {...others} />);
}

export default Component;
