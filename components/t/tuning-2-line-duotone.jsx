import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyac2jmak.css';
import '../../css/z/zavg8bcsl.css';
import '../../css/i/i7gb_ssvv.css';
import '../../css/r/r60x9s_xf.css';
import '../../css/h/hb2_j1b1q.css';
import '../../css/n/n2mypnbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lyac2jmak"/><path class="zavg8bcsl"/><path class="i7gb_ssvv"/><path class="r60x9s_xf"/><path class="hb2_j1b1q"/><path class="n2mypnbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-line-duotone"} {...others} />);
}

export default Component;
