import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9ivwqbdw.css';
import '../../css/l/liiml2jkt.css';
import '../../css/k/kwotsob1p.css';
import '../../css/g/g_jsg5_1i.css';
import '../../css/v/vsxgtokaa.css';
import '../../css/n/nub0nebyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e9ivwqbdw"/><path class="liiml2jkt"/><path class="kwotsob1p"/><path class="g_jsg5_1i"/><path class="vsxgtokaa"/><path class="nub0nebyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-rain-outline"} {...others} />);
}

export default Component;
