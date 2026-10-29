import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwtp4nbgu.css';
import '../../css/d/d-j-3vbzo.css';
import '../../css/w/wanqtl7hh.css';
import '../../css/k/kn3piikji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lwtp4nbgu wm-k"/><path class="d-j-3vbzo wm-a"/><path class="wanqtl7hh wm-k"/><path class="kn3piikji wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-line-sketch"} {...others} />);
}

export default Component;
