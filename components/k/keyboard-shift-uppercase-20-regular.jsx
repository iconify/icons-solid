import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gkyce-kez {
  fill: currentColor;
  d: path("M11.143 2.53a1.5 1.5 0 0 0-2.288 0L2.24 10.333A1 1 0 0 0 3 11.98h3v3.017a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11.98h2.996a1 1 0 0 0 .763-1.647zm-1.525.647a.5.5 0 0 1 .763 0l6.616 7.803H13.5a.5.5 0 0 0-.5.5v3.517H7V11.48a.5.5 0 0 0-.5-.5H3.001zM6.5 17a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="gkyce-kez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:keyboard-shift-uppercase-20-regular"} {...others} />);
}

export default Component;
