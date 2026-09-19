import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ybsa6tb7h {
  fill: currentColor;
  d: path("m6.83 4l8 8H20v2h-3.17L22 19.17V4zm-5.79-.13l.96.96V20h15.17l2.96 2.96l1.41-1.41L2.45 2.45zM4 12h4v2H4zm0 4h9.17l.83.83V18H4z");
}
</style><path class="ybsa6tb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-subtitles-off"} {...others} />);
}

export default Component;
