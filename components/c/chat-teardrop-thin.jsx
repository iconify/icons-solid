import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.opm38m-1r {
  fill: currentColor;
  d: path("M132 28a96.11 96.11 0 0 0-96 96v84a12 12 0 0 0 12 12h84a96 96 0 0 0 0-192m0 184H48a4 4 0 0 1-4-4v-84a88 88 0 1 1 88 88");
}
</style><path class="opm38m-1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-teardrop-thin"} {...others} />);
}

export default Component;
