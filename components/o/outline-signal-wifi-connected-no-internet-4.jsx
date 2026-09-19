import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z4eflbb3y {
  fill: currentColor;
  d: path("M24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09l-.3-.3L15.41 14L14 15.41l1.79 1.79l.3.3L14 19.59L15.41 21l2.09-2.08L19.59 21L21 19.59l-2.08-2.09L21 15.41z");
}
</style><path class="z4eflbb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-signal-wifi-connected-no-internet-4"} {...others} />);
}

export default Component;
