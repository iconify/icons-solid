import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q41rbdk3p.css';
import '../../css/p/po_tpsbqb.css';
import '../../css/z/zt_f-1b6r.css';
import '../../css/f/fpsms8w3k.css';
import '../../css/l/l-_u6yahr.css';
import '../../css/n/ne_2yhb2r.css';
import '../../css/w/wmuyj-bpw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q41rbdk3p"/><path class="po_tpsbqb"/><path class="zt_f-1b6r"/><path class="fpsms8w3k"/><path class="l-_u6yahr"/><path class="ne_2yhb2r"/><path class="wmuyj-bpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:file-browser"} {...others} />);
}

export default Component;
