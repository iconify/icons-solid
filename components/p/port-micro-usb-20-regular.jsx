import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hiscgqb5v {
  fill: currentColor;
  d: path("M6.433 8.3a1.5 1.5 0 0 1 .9-.3h5.334c.324 0 .64.105.9.3l1.333 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7zm.9.7a.5.5 0 0 0-.3.1l-1.333 1a.5.5 0 0 0 .3.9h8a.5.5 0 0 0 .3-.9l-1.333-1a.5.5 0 0 0-.3-.1z");
}
</style><path class="hiscgqb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:port-micro-usb-20-regular"} {...others} />);
}

export default Component;
