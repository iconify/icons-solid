import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkde0ac_p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl-5e19tl.css';
import '../../css/r/rl9mryfun.css';
import '../../css/f/f2a5cbb2a.css';
import '../../css/c/cu24_jbbf.css';
import '../../css/q/qkom9vbof.css';
import '../../css/m/mz_j3-bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkde0ac_p secondary"/><g class="dt0cm9dhy primary"><path class="yl-5e19tl"/><path class="rl9mryfun"/><path class="f2a5cbb2a"/><path class="cu24_jbbf"/><path class="qkom9vbof"/><path class="mz_j3-bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-mail-duo"} {...others} />);
}

export default Component;
