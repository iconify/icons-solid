import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qu65vzbqw {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20zm8.7-4l4.5-4.55l-1.4-1.4l-3.1 3.1L8.5 11H10V9H5v5h2v-1.7z");
}
</style><path class="qu65vzbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:missed-video-call-sharp"} {...others} />);
}

export default Component;
