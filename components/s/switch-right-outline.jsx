import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rclmj10lx {
  fill: currentColor;
  d: path("m10 19l-7-7l7-7zm4 0V5l7 7zm1.5-3.625L18.875 12L15.5 8.625z");
}
</style><path class="rclmj10lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-right-outline"} {...others} />);
}

export default Component;
