import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ws22iuovz {
  fill: currentColor;
  d: path("M230 184a6 6 0 0 1-12 0a90 90 0 0 0-153.64-63.64L38.55 146H88a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v49.58l25.89-25.72A102 102 0 0 1 230 184");
}
</style><path class="ws22iuovz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-left-light"} {...others} />);
}

export default Component;
