import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.za9stvb_y {
  fill: currentColor;
  d: path("M228 128a92.1 92.1 0 0 1-92 92H64a12 12 0 0 1 0-24h72a68 68 0 0 0 0-136H64a12 12 0 0 1 0-24h72a92.1 92.1 0 0 1 92 92");
}
</style><path class="za9stvb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-proper-of-bold"} {...others} />);
}

export default Component;
