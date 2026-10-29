import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/o/oui4sebxw.css';
import '../../css/j/j44_jlbcg.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/d/df_konclx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="oui4sebxw wm-a"/><path class="j44_jlbcg wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="df_konclx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-hail-engrave"} {...others} />);
}

export default Component;
