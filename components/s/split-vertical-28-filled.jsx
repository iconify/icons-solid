import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.sgmlwublm {
  fill: currentColor;
  d: path("M12.998 25.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0zM2 6.75A2.75 2.75 0 0 1 4.75 4h7.248v20H4.75A2.75 2.75 0 0 1 2 21.25zM22.75 24h-7.252V4h7.252a2.75 2.75 0 0 1 2.75 2.75v14.5A2.75 2.75 0 0 1 22.75 24");
}
</style><path class="sgmlwublm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-28-filled"} {...others} />);
}

export default Component;
