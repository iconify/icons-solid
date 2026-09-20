import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a81jb-bfx {
  fill: currentColor;
  d: path("m19.037 15.885l-3.575-3.581v-1.112H14.35l-1.39-1.384h2.502V7.769h-3.039V9.29l-1.057-1.057v-.464h-.458L7.133 4H19.23v3.77h1.538v1H19.23v2.557h1.538v1H19.23v2.558h1.538v1zM7 16.23h4.116v-3.039H7zM4.335 4.059l14.877 14.878V20H3.23V4.06zm8.088 8.089v4.083h3.039v-1.045zM8.044 7.769H7v4.039h4.116v-.968zm13.2 14.627L2.021 3.173l.713-.713l19.224 19.223z");
}
</style><path class="a81jb-bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:developer-board-off-sharp"} {...others} />);
}

export default Component;
