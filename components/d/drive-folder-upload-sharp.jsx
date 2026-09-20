import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.skgmo27ln {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm9-3h2v-4.2l1.6 1.6L16 13l-4-4l-4 4l1.4 1.4l1.6-1.6z");
}
</style><path class="skgmo27ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drive-folder-upload-sharp"} {...others} />);
}

export default Component;
