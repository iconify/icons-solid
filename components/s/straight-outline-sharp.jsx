import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r7un6_b_b {
  fill: currentColor;
  d: path("M11 21V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V21z");
}
</style><path class="r7un6_b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:straight-outline-sharp"} {...others} />);
}

export default Component;
