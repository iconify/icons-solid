import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as676gbul.css';
import '../../css/n/nv_mtho0g.css';
import '../../css/s/s8-l_7bjy.css';
import '../../css/a/amupylb8b.css';
import '../../css/r/rfe-3kblm.css';
import '../../css/w/wetttzrrb.css';
import '../../css/j/jurhh86oq.css';
import '../../css/d/dn-zb1b0c.css';
import '../../css/x/x2thrwbiw.css';
import '../../css/h/hhwqp47yk.css';
import '../../css/s/s4r0udmmq.css';
import '../../css/i/iftqbbppb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="as676gbul wm-shadow"/><path class="nv_mtho0g wm-shadow"/><path class="s8-l_7bjy wm-k"/><path class="amupylb8b wm-k"/><path class="rfe-3kblm wm-k"/><path class="wetttzrrb wm-k"/><path class="jurhh86oq wm-k"/><path class="dn-zb1b0c wm-s"/><path class="wm-s x2thrwbiw"/><path class="hhwqp47yk wm-s"/><path class="s4r0udmmq wm-s"/><path class="iftqbbppb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:church"} {...others} />);
}

export default Component;
