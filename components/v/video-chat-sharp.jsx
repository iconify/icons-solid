import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bir74zakd {
  fill: currentColor;
  d: path("M7 14h8v-3l2 2V7l-2 2V6H7zm-5 8V2h20v16H6z");
}
</style><path class="bir74zakd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-chat-sharp"} {...others} />);
}

export default Component;
