import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h805s_bny.css';
import '../../css/q/qm565hbxw.css';
import '../../css/x/xg34h7wbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h805s_bny"/><path class="qm565hbxw wm-k"/><path class="wm-a xg34h7wbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hexagon-sketch"} {...others} />);
}

export default Component;
