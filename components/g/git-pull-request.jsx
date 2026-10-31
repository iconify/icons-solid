import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iojs0mb8e.css';
import '../../css/o/op-k7nbwe.css';
import '../../css/d/dqgg8hbpc.css';
import '../../css/n/nk6795b5g.css';
import '../../css/a/a3cee_qrj.css';
import '../../css/i/i06pfbb3g.css';
import '../../css/x/x6fbhm-bt.css';
import '../../css/w/wlksxnbxa.css';
import '../../css/l/ldnkk8anw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iojs0mb8e wm-shadow"/><path class="op-k7nbwe"/><path class="dqgg8hbpc"/><path class="nk6795b5g"/><path class="a3cee_qrj"/><path class="i06pfbb3g"/><path class="x6fbhm-bt"/><path class="wlksxnbxa"/><path class="ldnkk8anw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:git-pull-request"} {...others} />);
}

export default Component;
