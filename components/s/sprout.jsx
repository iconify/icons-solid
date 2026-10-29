import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0paz_rus.css';
import '../../css/r/ra_5m_bqt.css';
import '../../css/o/o-u_bf4jc.css';
import '../../css/z/zvknm-bfy.css';
import '../../css/i/ia9a81k3x.css';
import '../../css/x/xhulg_col.css';
import '../../css/g/gp7smubef.css';
import '../../css/r/ryb6a8bnf.css';
import '../../css/h/hsbdkibci.css';
import '../../css/z/za0yj0b4h.css';
import '../../css/o/oixeixbct.css';
import '../../css/e/eo4wmibhu.css';
import '../../css/y/yonj7mbly.css';
import '../../css/d/dsn44kbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v0paz_rus wm-shadow"/><path class="ra_5m_bqt wm-shadow"/><path class="o-u_bf4jc wm-a"/><path class="wm-a zvknm-bfy"/><path class="ia9a81k3x wm-a"/><path class="wm-k xhulg_col"/><path class="gp7smubef wm-k"/><path class="ryb6a8bnf wm-k"/><path class="hsbdkibci wm-k"/><path class="wm-k za0yj0b4h"/><path class="oixeixbct wm-shine"/><path class="eo4wmibhu wm-k"/><path class="wm-k yonj7mbly"/><path class="dsn44kbvw wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sprout"} {...others} />);
}

export default Component;
