import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1-ql8but.css';
import '../../css/v/vms_4-big.css';
import '../../css/o/oudxreb4f.css';
import '../../css/i/i62fwhjrd.css';
import '../../css/i/ieuybcb9a.css';
import '../../css/f/fs3zz7-br.css';
import '../../css/y/y3rhsibni.css';
import '../../css/m/mrap_nmll.css';
import '../../css/l/l392odvld.css';
import '../../css/x/xfuof5b7l.css';
import '../../css/l/l69hf_bob.css';
import '../../css/b/b74mxusyx.css';
import '../../css/h/h514opbkh.css';
import '../../css/o/o3gv5ab_q.css';
import '../../css/m/m6y433gsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1-ql8but wm-shadow"/><path class="vms_4-big wm-k"/><path class="oudxreb4f wm-k"/><path class="i62fwhjrd wm-k"/><path class="ieuybcb9a wm-k"/><path class="fs3zz7-br wm-k"/><path class="wm-shine y3rhsibni"/><path class="mrap_nmll wm-k"/><path class="l392odvld wm-k"/><path class="wm-a xfuof5b7l"/><path class="l69hf_bob wm-a"/><path class="b74mxusyx wm-a"/><path class="h514opbkh wm-a"/><path class="o3gv5ab_q wm-a"/><path class="m6y433gsd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:badge-alert"} {...others} />);
}

export default Component;
