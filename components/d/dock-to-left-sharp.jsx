import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ubmnd0bhf {
  fill: currentColor;
  d: path("M5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="ubmnd0bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dock-to-left-sharp"} {...others} />);
}

export default Component;
