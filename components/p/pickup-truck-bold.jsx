import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2h5ez_iw.css';
import '../../css/w/won9v-bxs.css';
import '../../css/o/o5qyb44gt.css';
import '../../css/n/nv02c8bjo.css';
import '../../css/d/dz0mgebzd.css';
import '../../css/l/l2ajmcb4y.css';
import '../../css/t/tx_qp_b2o.css';
import '../../css/x/xu2a6zbfs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y2h5ez_iw"/><path clip-rule="evenodd" class="won9v-bxs"/><path class="o5qyb44gt"/><path clip-rule="evenodd" class="nv02c8bjo"/><path class="dz0mgebzd"/><path clip-rule="evenodd" class="l2ajmcb4y"/><path class="tx_qp_b2o"/><path class="xu2a6zbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pickup-truck-bold"} {...others} />);
}

export default Component;
