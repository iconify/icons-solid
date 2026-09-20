import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nyhiu2wqu {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20 28a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="nyhiu2wqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bowling-ball"} {...others} />);
}

export default Component;
