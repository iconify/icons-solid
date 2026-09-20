import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2_-rlk1z.css';
import '../../css/y/yc7s26btq.css';
import '../../css/v/v55cntbkk.css';
import '../../css/a/ag_28k-iz.css';
import '../../css/u/un4n7qb6y.css';
import '../../css/a/a5uf-ibpi.css';
import '../../css/z/zz2ss7b_m.css';
import '../../css/x/x5barcbcw.css';
import '../../css/o/oubynt_9k.css';
import '../../css/j/jua3-0bel.css';
import '../../css/f/f3gdqac6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e2_-rlk1z"/><path class="yc7s26btq"/><path class="v55cntbkk"/><path class="ag_28k-iz"/><path class="un4n7qb6y"/><path class="a5uf-ibpi"/><path class="zz2ss7b_m"/><path class="x5barcbcw"/><path class="oubynt_9k"/><path class="jua3-0bel"/><path class="f3gdqac6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:multiple-actions-chat"} {...others} />);
}

export default Component;
