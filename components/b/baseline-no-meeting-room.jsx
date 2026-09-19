import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qgf7_rb0c {
  fill: currentColor;
  d: path("M11 11h-1v2h2v-1l9.73 9.73L20.46 23L14 16.54V21H3v-2h2V7.54l-4-4l1.27-1.27zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3z");
}
</style><path class="qgf7_rb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-no-meeting-room"} {...others} />);
}

export default Component;
