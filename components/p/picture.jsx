import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnlzi3b0n.css';
import '../../css/n/nrdbkelci.css';
import '../../css/y/y962nz2iu.css';
import '../../css/q/qn33pdbfi.css';
import '../../css/c/cpd-_igcp.css';
import '../../css/n/n89s-pnar.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/h5b0yvbmr.css';
import '../../css/i/i56sxs-gw.css';
import '../../css/z/zlciombbh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xnlzi3b0n"/><path class="nrdbkelci"/><path class="y962nz2iu"/><path class="qn33pdbfi"/><path class="cpd-_igcp"/><path class="n89s-pnar"/><g class="ij2x_72vy"><path class="h5b0yvbmr"/><path class="i56sxs-gw"/><path class="zlciombbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:picture"} {...others} />);
}

export default Component;
