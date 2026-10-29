import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pjytr7bkn.css';
import '../../css/h/h8vo_l87w.css';
import '../../css/x/x-5rr3xtm.css';
import '../../css/t/tx2v7znqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pjytr7bkn"/><path class="h8vo_l87w wm-a"/><path class="wm-k x-5rr3xtm"/><path class="tx2v7znqn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sd-card-sketch"} {...others} />);
}

export default Component;
