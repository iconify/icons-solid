import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ao6h7dxtx.css';
import '../../css/i/iae-omcqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ao6h7dxtx"/><path class="iae-omcqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-search"} {...others} />);
}

export default Component;
