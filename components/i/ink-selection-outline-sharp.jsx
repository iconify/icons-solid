import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzptj1b4l {
  fill: currentColor;
  d: path("M11 21V11h10v2h-6.6l6.6 6.6l-1.4 1.4l-6.6-6.6V21zm-4 0v-2h2v2zM3 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 21v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 0V7h2v2z");
}
</style><path class="lzptj1b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-selection-outline-sharp"} {...others} />);
}

export default Component;
