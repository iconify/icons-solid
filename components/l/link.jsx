import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1zgs5gcw.css';
import '../../css/t/td3j97bbm.css';
import '../../css/f/fpsu_mero.css';
import '../../css/w/wda8id1cy.css';
import '../../css/t/tdoqnwsqj.css';
import '../../css/h/hoikyoqnh.css';
import '../../css/k/k3hpb6btn.css';
import '../../css/v/vxo16h16w.css';
import '../../css/o/o89s1b0ja.css';
import '../../css/d/d2jftqb7u.css';
import '../../css/u/uklbt9bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p1zgs5gcw wm-k"/><path class="td3j97bbm wm-k"/><path class="fpsu_mero wm-k"/><path class="wda8id1cy wm-shine"/><path class="tdoqnwsqj wm-a"/><path class="hoikyoqnh wm-a"/><path class="k3hpb6btn wm-a"/><path class="vxo16h16w wm-shine"/><path class="o89s1b0ja wm-k"/><path class="d2jftqb7u wm-k"/><path class="uklbt9bhy wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:link"} {...others} />);
}

export default Component;
