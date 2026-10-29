import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwb9y2bsn.css';
import '../../css/x/xmya3k2jv.css';
import '../../css/m/mjmnulbuh.css';
import '../../css/j/jczszebcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kwb9y2bsn wm-k"/><path class="wm-a xmya3k2jv"/><path class="mjmnulbuh wm-k"/><path class="jczszebcb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hash-sketch"} {...others} />);
}

export default Component;
