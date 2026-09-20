import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ii-uimhci {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0m0 30c-6.627 0-12-5.373-12-12S11.373 6 18 6s12 5.373 12 12s-5.373 12-12 12");
}
</style><path class="ii-uimhci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:heavy-large-circle"} {...others} />);
}

export default Component;
