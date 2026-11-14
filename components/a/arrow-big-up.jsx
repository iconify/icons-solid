import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.md_ua-b8d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.386 4.826l4.553 4.553q.795.794.365 1.833T17.75 12.25q-1.5 0-1.5 1.5v4.125q0 3.375-3.375 3.375h-1.75q-3.375 0-3.375-3.375V13.75q0-1.5-1.5-1.5q-1.124 0-1.554-1.038t.365-1.833l4.553-4.553q2.386-2.386 4.772 0");
}
</style><path class="md_ua-b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:arrow-big-up"} {...others} />);
}

export default Component;
