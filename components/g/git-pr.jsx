import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic7n990le.css';
import '../../css/v/vf2fxkb3g.css';
import '../../css/e/e8350wbci.css';
import '../../css/n/n5rajoqpt.css';
import '../../css/s/s67vybp7w.css';
import '../../css/d/dqhss5bgs.css';
import '../../css/y/yf3vpjbmn.css';
import '../../css/z/zgn_littq.css';
import '../../css/x/x0kzdvbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ic7n990le"/><path class="vf2fxkb3g"/><circle class="e8350wbci"/><circle class="n5rajoqpt"/><circle class="s67vybp7w"/><circle class="dqhss5bgs"/><circle class="yf3vpjbmn"/><path class="zgn_littq"/><path class="x0kzdvbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-pr"} {...others} />);
}

export default Component;
