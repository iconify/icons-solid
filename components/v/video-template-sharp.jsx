import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j96mtrbnx {
  fill: currentColor;
  d: path("M3 23v-3h18v3zm-1-5V6h20v12zm8-3l5-3l-5-3zM3 4V1h18v3z");
}
</style><path class="j96mtrbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-template-sharp"} {...others} />);
}

export default Component;
