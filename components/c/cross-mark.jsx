import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.n-fu8_blt {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.5 2.5 0 0 0-3.535 0a2.5 2.5 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.5 2.5 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267z");
}
</style><path class="n-fu8_blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:cross-mark"} {...others} />);
}

export default Component;
