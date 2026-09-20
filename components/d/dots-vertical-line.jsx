import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wudtcpqfk.css';
import '../../css/v/v27-w6bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wudtcpqfk"/><path class="v27-w6bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dots-vertical-line"} {...others} />);
}

export default Component;
