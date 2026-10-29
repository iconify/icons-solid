import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1vtcqu8x.css';
import '../../css/v/v8yvcacmt.css';
import '../../css/y/yrnv22bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p1vtcqu8x"/><path class="v8yvcacmt wm-shadow"/><path class="yrnv22bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bone-engrave"} {...others} />);
}

export default Component;
