import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmsy1f_iy {
  fill: currentColor;
  d: path("M13.49 14.5H8.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v4.639L9.278 8.217a.75.75 0 1 0-1.056 1.066zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17");
}
</style><path class="tmsy1f_iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-circle-down-right-24-regular"} {...others} />);
}

export default Component;
