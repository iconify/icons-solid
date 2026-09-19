import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpggevw-g.css';
import '../../css/y/ybx-4bctm.css';
import '../../css/i/i44kps-wg.css';
import '../../css/u/uet654h4f.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mwo-bhu0m.css';
import '../../css/s/setm5z74p.css';
import '../../css/y/y--rs-1ym.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="xpggevw-g"/><path class="ybx-4bctm"/><path class="i44kps-wg"/><path clip-rule="evenodd" class="uet654h4f"/><g clip-rule="evenodd" class="n1lsf0bnc"><path class="mwo-bhu0m"/><circle class="setm5z74p"/><path class="y--rs-1ym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ohmyzsh"} {...others} />);
}

export default Component;
