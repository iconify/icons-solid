import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e9e0brnek {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 48h-22.36l-34.29 96H136a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16h22.36l34.29-96H120a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16");
}
</style><path class="e9e0brnek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-italic-fill"} {...others} />);
}

export default Component;
