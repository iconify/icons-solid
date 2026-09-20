import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_b23sbqh.css';
import '../../css/q/qwt4sqbbe.css';
import '../../css/x/xrp2ymb4h.css';
import '../../css/j/jtgch6ywc.css';
import '../../css/v/v7fu4u4bt.css';
import '../../css/l/ldnznebld.css';
import '../../css/q/qfmsgob2q.css';
import '../../css/k/k5s4e271i.css';
import '../../css/c/cj9yzh8rq.css';
import '../../css/x/xn70a6d2l.css';
import '../../css/g/ggoyo3gel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_b23sbqh"/><path class="qwt4sqbbe"/><path class="xrp2ymb4h"/><path class="jtgch6ywc"/><path class="v7fu4u4bt"/><path class="ldnznebld"/><path class="qfmsgob2q"/><path class="k5s4e271i"/><path class="cj9yzh8rq"/><path class="xn70a6d2l"/><path class="ggoyo3gel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:business-deal-handshake-1"} {...others} />);
}

export default Component;
