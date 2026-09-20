import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/l/l528bdc2u.css';
import '../../css/d/db74-0bgp.css';
import '../../css/z/zlwty5iug.css';
import '../../css/r/rdo3w5nvt.css';
import '../../css/l/lf0y1n3zd.css';
import '../../css/z/ze5t_cxgm.css';
import '../../css/u/u0xx0yjmn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="l528bdc2u"/><path class="db74-0bgp"/><path class="zlwty5iug"/><path class="rdo3w5nvt"/><path class="lf0y1n3zd"/><path class="ze5t_cxgm"/><path class="u0xx0yjmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:predator"} {...others} />);
}

export default Component;
