import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.rs2mvsbcp {
  fill: currentColor;
  d: path("M4.002 22.248a3.75 3.75 0 0 0 3.75 3.75h12.5a3.75 3.75 0 0 0 3.75-3.75V5.752a3.75 3.75 0 0 0-3.75-3.75h-12.5a3.75 3.75 0 0 0-3.75 3.75z");
}
</style><path class="rs2mvsbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rectangle-portrait-28-filled"} {...others} />);
}

export default Component;
