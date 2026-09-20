import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y0ismfb_w {
  fill: currentColor;
  d: path("M3.997 11.5a1.5 1.5 0 0 1 1.5-1.5h37a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1-1.5-1.5M4 24.5A1.5 1.5 0 0 1 5.5 23h37a1.5 1.5 0 0 1 0 3h-37A1.5 1.5 0 0 1 4 24.5M5.5 36a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 0 0 0-3z");
}
</style><path class="y0ismfb_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-3-48-filled"} {...others} />);
}

export default Component;
