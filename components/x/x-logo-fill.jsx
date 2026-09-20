import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c0rs7nbsz {
  fill: currentColor;
  d: path("M215 219.85a8 8 0 0 1-7 4.15h-48a8 8 0 0 1-6.75-3.71l-40.49-63.63l-58.84 64.72a8 8 0 0 1-11.84-10.76l61.77-68l-62.6-98.32A8 8 0 0 1 48 32h48a8 8 0 0 1 6.75 3.71l40.49 63.63l58.84-64.72a8 8 0 0 1 11.84 10.76l-61.77 67.95l62.6 98.38a8 8 0 0 1 .25 8.14");
}
</style><path class="c0rs7nbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:x-logo-fill"} {...others} />);
}

export default Component;
