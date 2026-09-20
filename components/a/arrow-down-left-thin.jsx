import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rsj49k0tj {
  fill: currentColor;
  d: path("M194.83 66.83L73.66 188H168a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v94.34L189.17 61.17a4 4 0 1 1 5.66 5.66");
}
</style><path class="rsj49k0tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-down-left-thin"} {...others} />);
}

export default Component;
