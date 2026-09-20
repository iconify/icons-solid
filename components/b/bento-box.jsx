import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olqxyvbdx.css';
import '../../css/r/r8hatfb7k.css';
import '../../css/s/sk03fwszw.css';
import '../../css/c/cw84b2bkk.css';
import '../../css/o/o-4xb79dn.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/uoo5bhbto.css';
import '../../css/s/swzs5k1ak.css';
import '../../css/x/xidegdflo.css';
import '../../css/a/ao-prpbbe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="olqxyvbdx"/><path class="r8hatfb7k"/><path class="sk03fwszw"/><path class="cw84b2bkk"/><path class="o-4xb79dn"/><g class="ij2x_72vy"><path class="uoo5bhbto"/><path class="swzs5k1ak"/><path class="xidegdflo"/><path class="ao-prpbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bento-box"} {...others} />);
}

export default Component;
