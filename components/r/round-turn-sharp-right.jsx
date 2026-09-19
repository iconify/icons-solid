import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xb7x1fb_k {
  fill: currentColor;
  d: path("m16 6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L20.3 6.3a.996.996 0 1 1-1.41 1.41L18 6.83V13c0 1.1-.9 2-2 2H8v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-1.1.9-2 2-2h8z");
}
</style><path class="xb7x1fb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-turn-sharp-right"} {...others} />);
}

export default Component;
