import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/z/z_tyjytwq.css';
import '../../css/u/ugc275bwo.css';
import '../../css/q/qm2t7t3ph.css';
import '../../css/m/m6azdwm9a.css';
import '../../css/k/kgqn3tg7g.css';
import '../../css/u/uvd47t--g.css';
import '../../css/z/z29psskpr.css';
import '../../css/d/dmep7cbtb.css';
import '../../css/i/i-zwnccbm.css';
import '../../css/g/gu3ps5ega.css';
import '../../css/t/t0wf9ij8l.css';
import '../../css/z/zbsg8nb5p.css';
import '../../css/s/soy828bwq.css';
import '../../css/k/kulbu1b3k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="z_tyjytwq"/><path class="ugc275bwo"/><path class="qm2t7t3ph"/><path class="m6azdwm9a"/><path class="kgqn3tg7g"/><path class="uvd47t--g"/><path class="z29psskpr"/><path class="dmep7cbtb"/><path class="i-zwnccbm"/><path class="gu3ps5ega"/><path class="t0wf9ij8l"/><path class="zbsg8nb5p"/><path class="soy828bwq"/><path class="kulbu1b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-pouting-1"} {...others} />);
}

export default Component;
