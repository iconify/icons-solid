import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.brsby7tqs {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-78.83a4 4 0 0 1-5.66 5.66L128 109.66l-37.17 37.17a4 4 0 0 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0Z");
}
</style><path class="brsby7tqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-up-thin"} {...others} />);
}

export default Component;
