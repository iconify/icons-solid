import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lopfx-b4r {
  fill: currentColor;
  d: path("M12 20v-2h8v2zm-6.5-4l-1.4-1.4L8.675 10L4.1 5.4L5.5 4l6 6z");
}
</style><path class="lopfx-b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:terminal-2-outline-sharp"} {...others} />);
}

export default Component;
