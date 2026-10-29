import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jz9-c4-xu.css';
import '../../css/w/wj-g94bhq.css';
import '../../css/c/c7z3d1wlm.css';
import '../../css/i/ii38l8p7q.css';
import '../../css/d/dvf39bc3x.css';
import '../../css/n/nn0nfyfye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jz9-c4-xu"/><path class="wj-g94bhq wm-k"/><path class="c7z3d1wlm wm-a"/><path class="ii38l8p7q wm-k"/><path class="dvf39bc3x wm-a"/><path class="nn0nfyfye wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-warning-sketch"} {...others} />);
}

export default Component;
