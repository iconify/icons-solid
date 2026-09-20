import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6tzumbwn {
  fill: currentColor;
  d: path("M9 17q-2.075 0-3.537-1.463T4 12t1.463-3.537T9 7q1.825 0 3.188 1.138T13.9 11h4.275L16.6 9.4L18 8l4 4l-4 4l-1.425-1.4l1.6-1.6H13.9q-.35 1.725-1.713 2.863T9 17");
}
</style><path class="t6tzumbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:swipe-right-alt-sharp"} {...others} />);
}

export default Component;
