import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqde4hbwf.css';
import '../../css/q/q4gsjmbsn.css';
import '../../css/e/e2b77k6ul.css';
import '../../css/i/ij2jxmb6w.css';
import '../../css/k/koc12xbns.css';
import '../../css/l/ljg4mrbrx.css';
import '../../css/l/ldskb3b1r.css';
import '../../css/w/wo9k7ub0f.css';
import '../../css/f/fis466asd.css';
import '../../css/d/dbitb88-e.css';
import '../../css/o/oqgs4n83c.css';
import '../../css/n/njaubtbwk.css';
import '../../css/f/fyloo8vaa.css';
import '../../css/i/iu2lvgbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eqde4hbwf wm-shadow"/><path class="q4gsjmbsn wm-k"/><path class="e2b77k6ul wm-k"/><path class="ij2jxmb6w wm-k"/><path class="koc12xbns wm-k"/><path class="ljg4mrbrx wm-shine"/><path class="ldskb3b1r wm-k"/><path class="wm-a wo9k7ub0f"/><path class="fis466asd wm-a"/><path class="dbitb88-e wm-a"/><path class="oqgs4n83c wm-a"/><path class="njaubtbwk wm-a"/><path class="fyloo8vaa wm-a"/><path class="iu2lvgbao wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:rose"} {...others} />);
}

export default Component;
