import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6j6zhbeq {
  fill: currentColor;
  d: path("M7.5 9.5V4H3V3h18v1h-4.5v5.5zM3 21v-1h4.5v-5.5h9V20H21v1z");
}
</style><path class="p6j6zhbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-stretch-outline-sharp"} {...others} />);
}

export default Component;
