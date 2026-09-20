import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/n/no_-bny2y.css';
import '../../css/z/ze3t-fbsu.css';
import '../../css/q/qm2t7t3ph.css';
import '../../css/m/m6azdwm9a.css';
import '../../css/k/kgqn3tg7g.css';
import '../../css/u/uvd47t--g.css';
import '../../css/y/yemgbachf.css';
import '../../css/o/owo_eaclv.css';
import '../../css/i/i-zwnccbm.css';
import '../../css/v/vaed1ybbe.css';
import '../../css/t/t0wf9ij8l.css';
import '../../css/z/zbsg8nb5p.css';
import '../../css/f/fcqkspxmd.css';
import '../../css/k/kulbu1b3k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="no_-bny2y"/><path class="ze3t-fbsu"/><path class="qm2t7t3ph"/><path class="m6azdwm9a"/><path class="kgqn3tg7g"/><path class="uvd47t--g"/><path class="yemgbachf"/><path class="owo_eaclv"/><path class="i-zwnccbm"/><path class="vaed1ybbe"/><path class="t0wf9ij8l"/><path class="zbsg8nb5p"/><path class="fcqkspxmd"/><path class="kulbu1b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-pouting-2"} {...others} />);
}

export default Component;
