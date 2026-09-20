import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8s5_qima {
  fill: currentColor;
  d: path("M6.4 21L5 19.6l6-6.025v-6.75L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v6.75l6 6.025l-1.4 1.4l-5.6-5.6z");
}
</style><path class="w8s5_qima"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:merge-outline-sharp"} {...others} />);
}

export default Component;
