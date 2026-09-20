import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.wdxdpob1w {
  fill: currentColor;
  d: path("M2 5.4A2.4 2.4 0 0 1 4.4 3h.1a.5.5 0 0 1 0 1h-.1A1.4 1.4 0 0 0 3 5.4v.2A1.4 1.4 0 0 0 4.4 7h.1a.5.5 0 0 1 0 1h-.1A2.4 2.4 0 0 1 2 5.6zm8 0A2.4 2.4 0 0 0 7.6 3h-.1a.5.5 0 0 0 0 1h.1A1.4 1.4 0 0 1 9 5.4v.2A1.4 1.4 0 0 1 7.6 7h-.1a.5.5 0 0 0 0 1h.1A2.4 2.4 0 0 0 10 5.6zM4.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="wdxdpob1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:link-12-regular"} {...others} />);
}

export default Component;
