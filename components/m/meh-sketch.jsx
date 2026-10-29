import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qchn59f8p.css';
import '../../css/n/ns1jfzbcp.css';
import '../../css/q/qrfzbkdib.css';
import '../../css/v/vmlpc7vwr.css';
import '../../css/g/gke91ac6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qchn59f8p"/><path class="ns1jfzbcp wm-k"/><path class="qrfzbkdib wm-k"/><path class="vmlpc7vwr wm-a"/><path class="gke91ac6l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:meh-sketch"} {...others} />);
}

export default Component;
