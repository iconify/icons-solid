import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ao6h7dxtx.css';
import '../../css/a/apnm6db5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ao6h7dxtx"/><path class="apnm6db5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-user"} {...others} />);
}

export default Component;
