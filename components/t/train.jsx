import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jl9jk90kn.css';
import '../../css/t/trp5uzb_n.css';
import '../../css/i/i-2lwccfg.css';
import '../../css/t/txyn3ts-g.css';
import '../../css/j/je6-qtb7r.css';
import '../../css/l/l703mcccm.css';
import '../../css/m/mez_iqb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jl9jk90kn"/><path class="trp5uzb_n"/><path class="i-2lwccfg"/><path class="txyn3ts-g"/><path class="je6-qtb7r"/><path class="l703mcccm"/><path class="mez_iqb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:train"} {...others} />);
}

export default Component;
