import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j_gfjlg0v.css';
import '../../css/w/w7dtdjb0l.css';
import '../../css/t/t4jvu4b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j_gfjlg0v"/><path class="w7dtdjb0l wm-k"/><path class="t4jvu4b4x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:boxes-sketch"} {...others} />);
}

export default Component;
