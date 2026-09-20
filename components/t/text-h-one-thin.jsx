import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rf8k6bz_m {
  fill: currentColor;
  d: path("M228 112v96a4 4 0 0 1-8 0v-88.53l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 228 112m-84-60a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4");
}
</style><path class="rf8k6bz_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-h-one-thin"} {...others} />);
}

export default Component;
