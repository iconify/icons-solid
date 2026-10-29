import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pdwey0b5q.css';
import '../../css/n/n79j0rbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pdwey0b5q"/><path class="n79j0rbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:close-sketch"} {...others} />);
}

export default Component;
