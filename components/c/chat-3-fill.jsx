import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb0la0xpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb0la0xpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-3-fill"} {...others} />);
}

export default Component;
