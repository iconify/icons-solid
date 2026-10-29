import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcgedo1qv.css';
import '../../css/x/xwywpgxhi.css';
import '../../css/b/bwf1bc5xm.css';
import '../../css/k/kopxqdmdp.css';
import '../../css/q/qhiinpx5i.css';
import '../../css/a/atzuy-thr.css';
import '../../css/x/x-8kqzgpr.css';
import '../../css/z/z98lwggjp.css';
import '../../css/z/zi7tgqxdd.css';
import '../../css/j/jflsevxfk.css';
import '../../css/z/zu9absbgf.css';
import '../../css/s/sct9vdjjc.css';
import '../../css/p/pdbac66fz.css';
import '../../css/p/pcwpt2bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mcgedo1qv wm-shadow"/><path class="wm-shadow xwywpgxhi"/><path class="bwf1bc5xm wm-k"/><path class="kopxqdmdp wm-k"/><path class="qhiinpx5i wm-k"/><path class="atzuy-thr wm-k"/><path class="wm-shine x-8kqzgpr"/><path class="wm-shine z98lwggjp"/><path class="wm-k zi7tgqxdd"/><path class="jflsevxfk wm-s"/><path class="wm-s zu9absbgf"/><path class="sct9vdjjc wm-s"/><path class="pdbac66fz wm-s"/><path class="pcwpt2bxk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:filter-x"} {...others} />);
}

export default Component;
