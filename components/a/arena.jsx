import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/z/zhcnnrbqz.css';
import '../../css/y/yg0-h_7ex.css';
import '../../css/o/oric6vbzc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="zhcnnrbqz"/><path class="yg0-h_7ex"/><path class="oric6vbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:arena"} {...others} />);
}

export default Component;
