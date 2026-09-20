import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0pd4abbs {
  fill: currentColor;
  d: path("M6.4 21L5 19.6l4.825-4.85q.575-.575.875-1.3t.3-1.525v-5.1L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v5.1q0 .8.3 1.525t.875 1.3L19 19.6L17.6 21L12 15.4z");
}
</style><path class="p0pd4abbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:merge-outline"} {...others} />);
}

export default Component;
