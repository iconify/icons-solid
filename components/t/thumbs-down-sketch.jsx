import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d69hxya3k.css';
import '../../css/c/cxngk4btb.css';
import '../../css/x/xj8d2h4lb.css';
import '../../css/u/udv511-gg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d69hxya3k"/><path class="cxngk4btb wm-k"/><path class="wm-k xj8d2h4lb"/><path class="udv511-gg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-down-sketch"} {...others} />);
}

export default Component;
