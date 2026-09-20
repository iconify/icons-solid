import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/i/imrhgbc8c.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/g/gv40cnbhb.css';
import '../../css/v/vsveado4j.css';
import '../../css/n/ng2t34pxq.css';
import '../../css/z/zxylmobtl.css';
import '../../css/v/vn-u15bih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle transform="rotate(180 12 12)" class="h_tsn8bxt"/><circle transform="rotate(180 20 14)" class="imrhgbc8c"/><circle transform="matrix(-1 0 0 1 6 8)" class="np1e_hbeg"/><path class="gv40cnbhb"/><path class="vsveado4j"/><path class="ng2t34pxq"/><path class="zxylmobtl"/><path class="vn-u15bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-3-line-duotone"} {...others} />);
}

export default Component;
