import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3s7y6nwv {
  fill: currentColor;
  d: path("M5 21V3h9.5L19 7.5v2.58l-7.73 7.707V21zm8.654 0v-2.21l5.96-5.934l2.19 2.204l-5.94 5.94zm5.96-4.985l.925-.956l-.925-.943l-.95.95zM14 8h4l-4-4l4 4l-4-4z");
}
</style><path class="m3s7y6nwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:edit-document-sharp"} {...others} />);
}

export default Component;
