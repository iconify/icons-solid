import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yrtjkw1cf {
  fill: currentColor;
  d: path("M222 128a86.1 86.1 0 0 1-86 86H64a6 6 0 0 1 0-12h72a74 74 0 0 0 0-148H64a6 6 0 0 1 0-12h72a86.1 86.1 0 0 1 86 86");
}
</style><path class="yrtjkw1cf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-proper-of-light"} {...others} />);
}

export default Component;
