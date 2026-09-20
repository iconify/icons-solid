import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_t5_2bgn {
  fill: currentColor;
  d: path("M17.75 21h-5V3h5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21M6.25 3h5v8.25H3v-5A3.25 3.25 0 0 1 6.25 3M3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25z");
}
</style><path class="g_t5_2bgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-column-two-split-left-24-filled"} {...others} />);
}

export default Component;
