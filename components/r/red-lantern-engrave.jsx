import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sog12ps8i.css';
import '../../css/p/p4ir0zbci.css';
import '../../css/z/zo9l4m5qv.css';
import '../../css/s/srziv7glx.css';
import '../../css/c/cojk3quut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sog12ps8i wm-k"/><path class="p4ir0zbci wm-a"/><path class="wm-shadow zo9l4m5qv"/><path class="srziv7glx wm-k"/><path class="cojk3quut wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-lantern-engrave"} {...others} />);
}

export default Component;
