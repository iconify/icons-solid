import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iosxb4b7d {
  fill: currentColor;
  d: path("M8 18h6v-2l2 1.05v-4.1L14 14v-2H8zm-4 4V2h10l6 6v14zm9-13V4H6v16h12V9zM6 4v5zv16z");
}
</style><path class="iosxb4b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-file-outline-sharp"} {...others} />);
}

export default Component;
