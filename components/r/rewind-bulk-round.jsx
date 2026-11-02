import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pe2juqwtl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.457 6.428A2.998 2.998 0 0 1 13 9v.101l4.457-2.673A2.998 2.998 0 0 1 22 9v6a3 3 0 0 1-4.543 2.572L13 14.899V15a3 3 0 0 1-4.543 2.572l-5-3a2.998 2.998 0 0 1 0-5.144Z");
}
</style><path class="pe2juqwtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rewind-bulk-round"} {...others} />);
}

export default Component;
