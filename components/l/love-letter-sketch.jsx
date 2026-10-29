import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1-ahh3ts.css';
import '../../css/t/t8zalyb5a.css';
import '../../css/x/xzina6btr.css';
import '../../css/t/t8nc3obcc.css';
import '../../css/y/ybq5c-b2y.css';
import '../../css/w/w0pdnnbmu.css';
import '../../css/y/ypnrtcb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l1-ahh3ts"/><path class="t8zalyb5a wm-k"/><path class="wm-a xzina6btr"/><path class="t8nc3obcc wm-s"/><path class="wm-k ybq5c-b2y"/><path class="w0pdnnbmu wm-a"/><path class="wm-s ypnrtcb3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-letter-sketch"} {...others} />);
}

export default Component;
