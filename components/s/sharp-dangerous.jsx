import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mffn2ps2u {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zm.51 11.83l-1.41 1.41L12 13.41l-2.83 2.83l-1.41-1.41L10.59 12L7.76 9.17l1.41-1.41L12 10.59l2.83-2.83l1.41 1.41L13.41 12z");
}
</style><path class="mffn2ps2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-dangerous"} {...others} />);
}

export default Component;
