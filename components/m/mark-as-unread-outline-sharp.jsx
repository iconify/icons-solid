import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3rw75khc {
  fill: currentColor;
  d: path("M3 16.616V7l8-4l8.896 4.539h-2.182L11 4.135L4 7.61v9.006zM5.77 20V9.308H21V20zm7.615-5.265l-6.616-3.35V19H20v-7.615zm0-1.077L20 10.308H6.77zM20 10.308H6.77z");
}
</style><path class="o3rw75khc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mark-as-unread-outline-sharp"} {...others} />);
}

export default Component;
