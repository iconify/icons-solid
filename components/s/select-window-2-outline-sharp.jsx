import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j0mhzyszz {
  fill: currentColor;
  d: path("M4 20h12.23v-9.384H4zm13.23-5.616v-1H20V4H7.77v5.616h-1V3H21v11.385zM3 21V9.616h14.23V21zm7.116-5.692");
}
</style><path class="j0mhzyszz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-window-2-outline-sharp"} {...others} />);
}

export default Component;
