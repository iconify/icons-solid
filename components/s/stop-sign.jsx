import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ouejvjbbz {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("m12 3l-9 8.985V24l9 9h12l9-9V11.985L24 3z");
}

.wj299tcct {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M24.827 1H11.173L1 11.156v13.672L11.172 35h13.657L35 24.828V11.156zM33 24l-9 9H12l-9-9V11.985L12 3h12l9 8.985z");
}
</style><path class="ouejvjbbz"/><path class="wj299tcct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:stop-sign"} {...others} />);
}

export default Component;
