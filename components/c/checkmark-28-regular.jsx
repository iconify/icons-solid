import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.tptj_qrbo {
  fill: currentColor;
  d: path("M4.03 13.47a.75.75 0 0 0-1.06 1.06l7 7a.75.75 0 0 0 1.06 0l14-14a.75.75 0 0 0-1.06-1.06L10.5 19.94z");
}
</style><path class="tptj_qrbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:checkmark-28-regular"} {...others} />);
}

export default Component;
