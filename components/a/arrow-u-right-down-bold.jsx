import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h-j90ewfd {
  fill: currentColor;
  d: path("m224.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L156 195V88a44 44 0 0 0-88 0v88a12 12 0 0 1-24 0V88a68 68 0 0 1 136 0v107l27.51-27.52a12 12 0 0 1 17 17Z");
}
</style><path class="h-j90ewfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-right-down-bold"} {...others} />);
}

export default Component;
