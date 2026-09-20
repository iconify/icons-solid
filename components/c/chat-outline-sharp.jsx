import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_utjtbdl {
  fill: currentColor;
  d: path("M2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4zm2-2h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z");
}
</style><path class="e_utjtbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-outline-sharp"} {...others} />);
}

export default Component;
