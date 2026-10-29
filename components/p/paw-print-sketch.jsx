import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4npf2b7l.css';
import '../../css/a/aq2xiwpnd.css';
import '../../css/e/ex3s_hbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d4npf2b7l"/><path class="aq2xiwpnd wm-k"/><path class="ex3s_hbnx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paw-print-sketch"} {...others} />);
}

export default Component;
