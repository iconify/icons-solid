import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zxl4frnwh.css';
import '../../css/y/ysdx0w7ne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zxl4frnwh"/><path class="ysdx0w7ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:armchair-sketch"} {...others} />);
}

export default Component;
