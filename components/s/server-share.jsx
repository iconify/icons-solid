import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpesnsxbi.css';
import '../../css/z/zqz67724p.css';
import '../../css/j/jvm9c0bkn.css';
import '../../css/u/uy92rrgax.css';
import '../../css/t/tmu7etb5m.css';
import '../../css/q/qe1j7gv8u.css';
import '../../css/a/a61neebdj.css';
import '../../css/f/fa80c5bni.css';
import '../../css/n/nfb24zw1x.css';
import '../../css/v/vexm1pbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jpesnsxbi"/><path class="zqz67724p"/><path class="jvm9c0bkn"/><path class="uy92rrgax"/><path class="tmu7etb5m"/><path class="qe1j7gv8u"/><path class="a61neebdj"/><path class="fa80c5bni"/><path class="nfb24zw1x"/><path class="vexm1pbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:server-share"} {...others} />);
}

export default Component;
