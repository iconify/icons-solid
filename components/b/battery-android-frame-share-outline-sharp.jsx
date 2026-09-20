import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.an9300bdj {
  fill: currentColor;
  d: path("M1 18V6h17.175l-2 2H3v8h8v2zm12-2v-5h6.175L17.6 9.4L19 8l4 4l-4 4l-1.425-1.425l1.6-1.575H15v3zm-2-1H4V9h11.175H11z");
}
</style><path class="an9300bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-frame-share-outline-sharp"} {...others} />);
}

export default Component;
