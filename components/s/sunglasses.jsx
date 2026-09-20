import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tauanfnvr.css';
import '../../css/y/y-v11dbeg.css';
import '../../css/x/xgf0xg1ik.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/nlrdtu2ry.css';
import '../../css/h/h-72ub0ak.css';
import '../../css/n/nxmqv7bkq.css';
import '../../css/m/mqczl8bbj.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="tauanfnvr"><path class="y-v11dbeg"/><path class="xgf0xg1ik"/></g><g class="ij2x_72vy"><path class="nlrdtu2ry"/><path class="h-72ub0ak"/><circle class="nxmqv7bkq"/><circle class="mqczl8bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sunglasses"} {...others} />);
}

export default Component;
