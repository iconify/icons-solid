import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc7d-ks3l.css';
import '../../css/x/xf2hnybkd.css';
import '../../css/o/on6gq2cqs.css';
import '../../css/p/p5fbzcsqd.css';
import '../../css/p/pvw7jhb8q.css';
import '../../css/l/lgmbgubzh.css';
import '../../css/s/sl443zboa.css';
import '../../css/t/t4tqkxp8x.css';
import '../../css/f/fii248osc.css';
import '../../css/k/k11j2yb4p.css';
import '../../css/m/ma82xsq3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lc7d-ks3l wm-shadow"/><path class="wm-a xf2hnybkd"/><path class="on6gq2cqs wm-a"/><path class="p5fbzcsqd wm-a"/><path class="pvw7jhb8q wm-a"/><path class="lgmbgubzh wm-shine"/><path class="sl443zboa wm-k"/><path class="t4tqkxp8x wm-k"/><path class="fii248osc wm-k"/><path class="k11j2yb4p wm-k"/><path class="ma82xsq3t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:arrow-down-to-line"} {...others} />);
}

export default Component;
