import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.giqtdj4ai {
  fill: currentColor;
  d: path("m233.92 118.14l-96.06-96.06a14 14 0 0 0-19.72 0l-96.06 96.06a14 14 0 0 0 0 19.72l96.06 96.06a14 14 0 0 0 19.72 0l96-96.06a13.94 13.94 0 0 0 0-19.72Zm-8.49 11.24l-96.05 96.06a2 2 0 0 1-2.76 0l-96.05-96.06a2 2 0 0 1 0-2.76l96.05-96.06a2 2 0 0 1 2.76 0l96.05 96.06a2 2 0 0 1 0 2.76");
}
</style><path class="giqtdj4ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:diamond-light"} {...others} />);
}

export default Component;
