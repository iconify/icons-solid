import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h9chbz4lp {
  fill: currentColor;
  d: path("M248 162h-58V94h58a6 6 0 0 0 0-12h-59.37A14 14 0 0 0 176 74h-64a14 14 0 0 0-12.63 8H62v-2a6 6 0 0 0-12 0v2H8a6 6 0 0 0 0 12h42v68H8a6 6 0 0 0 0 12h42v2a6 6 0 0 0 12 0v-2h37.37a14 14 0 0 0 12.63 8h64a14 14 0 0 0 12.63-8H248a6 6 0 0 0 0-12M62 94h36v68H62Zm114 76h-64a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v34h-34a6 6 0 0 0 0 12h34v34a2 2 0 0 1-2 2");
}
</style><path class="h9chbz4lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:belt-light"} {...others} />);
}

export default Component;
