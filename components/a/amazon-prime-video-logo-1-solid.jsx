import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykt_9484h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ykt_9484h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-prime-video-logo-1-solid"} {...others} />);
}

export default Component;
