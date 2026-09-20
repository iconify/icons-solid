import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq-e53b_y {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4zm0-3.25L14.9 11H13V4h-2v7H9.1zM12 11");
}
</style><path class="fq-e53b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:download-2-outline-sharp"} {...others} />);
}

export default Component;
