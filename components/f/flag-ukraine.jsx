import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.avxj11blr {
  fill: var(--svg-color--005bbb, #005bbb);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}

.v2oqoeb3w {
  fill: var(--svg-color--ffd500, #ffd500);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36z");
}
</style><path class="avxj11blr"/><path class="v2oqoeb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-ukraine"} {...others} />);
}

export default Component;
