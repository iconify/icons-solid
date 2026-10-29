import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nsi8if9vq.css';
import '../../css/t/t1xreqb-l.css';
import '../../css/l/l31wd34jz.css';
import '../../css/s/sd3hx-buh.css';
import '../../css/i/i37y9wb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nsi8if9vq"/><path class="t1xreqb-l wm-k"/><path class="l31wd34jz wm-a"/><path class="sd3hx-buh wm-k"/><path class="i37y9wb6u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shovel-sketch"} {...others} />);
}

export default Component;
