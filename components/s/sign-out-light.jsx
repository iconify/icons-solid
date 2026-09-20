import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rc5f8ybma {
  fill: currentColor;
  d: path("M118 216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H54v164h58a6 6 0 0 1 6 6m110.24-92.24l-40-40a6 6 0 0 0-8.48 8.48L209.51 122H112a6 6 0 0 0 0 12h97.51l-29.75 29.76a6 6 0 1 0 8.48 8.48l40-40a6 6 0 0 0 0-8.48");
}
</style><path class="rc5f8ybma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sign-out-light"} {...others} />);
}

export default Component;
