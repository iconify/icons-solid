import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uu8vilbid {
  fill: currentColor;
  d: path("M18.75 15A2.25 2.25 0 0 1 21 17.25v2.5A2.25 2.25 0 0 1 18.75 22H5.25A2.25 2.25 0 0 1 3 19.75v-2.5A2.25 2.25 0 0 1 5.25 15zM12 1.5a1 1 0 0 1 .93.633l3.75 9.5a1 1 0 1 1-1.86.734L13.886 10h-3.772l-.934 2.367a1 1 0 1 1-1.86-.734l3.75-9.5l.067-.137A1 1 0 0 1 12 1.5M10.903 8h2.194L12 5.222z");
}
</style><path class="uu8vilbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-color-24-filled"} {...others} />);
}

export default Component;
