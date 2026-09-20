import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if-ttfbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="if-ttfbmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-follow-up-line"} {...others} />);
}

export default Component;
