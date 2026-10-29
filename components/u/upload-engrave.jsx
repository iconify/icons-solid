import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eaj_p_cdz.css';
import '../../css/n/ndixsabmg.css';
import '../../css/c/ccht0bp_w.css';
import '../../css/l/lw875-p4x.css';
import '../../css/p/ps9k3gbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eaj_p_cdz wm-k"/><path class="ndixsabmg wm-a"/><path class="ccht0bp_w wm-shadow"/><path class="lw875-p4x wm-k"/><path class="ps9k3gbsc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:upload-engrave"} {...others} />);
}

export default Component;
