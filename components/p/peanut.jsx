import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hwmy89b5y.css';
import '../../css/q/qbk2q8bia.css';
import '../../css/h/h858r8rgm.css';
import '../../css/f/fp6voqb7e.css';
import '../../css/s/sruwitbib.css';
import '../../css/g/g7vov9bhy.css';
import '../../css/r/rl010u0yz.css';
import '../../css/q/qrp2rbwhn.css';
import '../../css/h/hax605j4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="hwmy89b5y"/><path class="qbk2q8bia"/><path class="h858r8rgm"/><path class="fp6voqb7e"/><path class="sruwitbib"/><path class="g7vov9bhy"/><path class="rl010u0yz"/><path class="qrp2rbwhn"/><path class="hax605j4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:peanut"} {...others} />);
}

export default Component;
