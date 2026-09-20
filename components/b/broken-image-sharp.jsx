import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kbbxjvb6w {
  fill: currentColor;
  d: path("M3 21v-8.6l3 3l4-4l4 4l4-4l3 3V21zM3 3h18v8.575l-3-3l-4 4l-4-4l-4 4l-3-3z");
}
</style><path class="kbbxjvb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:broken-image-sharp"} {...others} />);
}

export default Component;
