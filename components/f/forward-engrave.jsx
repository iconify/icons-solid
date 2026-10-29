import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/drr12uo2g.css';
import '../../css/b/bryy_6b1h.css';
import '../../css/e/e0dk2vh0j.css';
import '../../css/k/kc_loxu3p.css';
import '../../css/l/lb1a6hbix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="drr12uo2g wm-k"/><path class="bryy_6b1h wm-a"/><path class="e0dk2vh0j wm-shadow"/><path class="kc_loxu3p wm-k"/><path class="lb1a6hbix wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:forward-engrave"} {...others} />);
}

export default Component;
