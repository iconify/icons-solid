import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb5_ojudz.css';
import '../../css/h/hx6yxljqs.css';
import '../../css/y/y_uqnrb5n.css';
import '../../css/o/o0yabbcdx.css';
import '../../css/r/rhr6r0bqs.css';
import '../../css/d/dmqr_svyz.css';
import '../../css/p/pne3pub7v.css';
import '../../css/a/amauetbxq.css';
import '../../css/a/a-5851t2w.css';
import '../../css/z/zyjv0nbam.css';
import '../../css/w/wyt425bbf.css';
import '../../css/k/kc14msb0p.css';
import '../../css/u/u094cbsxv.css';
import '../../css/r/rd_9w_bjv.css';
import '../../css/c/cnx75wt3x.css';
import '../../css/e/ezuv5dbse.css';
import '../../css/x/x9gpvnb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zb5_ojudz"/><path class="hx6yxljqs wm-k"/><path class="wm-k y_uqnrb5n"/><path class="o0yabbcdx wm-k"/><path class="rhr6r0bqs wm-k"/><path class="dmqr_svyz wm-k"/><path class="pne3pub7v wm-shine"/><path class="amauetbxq wm-k"/><path class="a-5851t2w wm-k"/><path class="wm-k zyjv0nbam"/><path class="wm-k wyt425bbf"/><path class="kc14msb0p wm-k"/><path class="u094cbsxv wm-k"/><path class="rd_9w_bjv wm-k"/><path class="cnx75wt3x wm-k"/><path class="ezuv5dbse wm-k"/><path class="wm-k x9gpvnb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:user-circle"} {...others} />);
}

export default Component;
