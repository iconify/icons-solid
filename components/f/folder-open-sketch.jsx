import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ca6loi6wc.css';
import '../../css/s/spndp72wt.css';
import '../../css/w/w38nzkbws.css';
import '../../css/q/q5yic0brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ca6loi6wc"/><path class="spndp72wt wm-k"/><path class="w38nzkbws wm-k"/><path class="q5yic0brb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-open-sketch"} {...others} />);
}

export default Component;
