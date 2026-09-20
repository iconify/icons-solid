import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pkosbcriz {
  fill: currentColor;
  d: path("M8.5 17.616h5.23v-2.077l1.847.973v-3.024l-1.846.974v-2.077H8.5zM5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z");
}
</style><path class="pkosbcriz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-file-outline-sharp"} {...others} />);
}

export default Component;
