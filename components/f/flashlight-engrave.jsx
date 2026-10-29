import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/chhsgivzo.css';
import '../../css/d/dfzb3k5ia.css';
import '../../css/j/jgi_vdb6a.css';
import '../../css/n/n4ra6qb5a.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="chhsgivzo wm-k"/><path class="dfzb3k5ia wm-s"/><path class="jgi_vdb6a wm-shadow"/><path class="n4ra6qb5a wm-k"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flashlight-engrave"} {...others} />);
}

export default Component;
