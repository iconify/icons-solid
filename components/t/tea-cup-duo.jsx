import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/u/u8onhac_p.css';
import '../../css/t/te_cyf9rd.css';
import '../../css/j/jbwikosqr.css';
import '../../css/j/jxqmr0b1u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="u8onhac_p"/><path clip-rule="evenodd" class="te_cyf9rd"/><path clip-rule="evenodd" class="jbwikosqr"/><path class="jxqmr0b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:tea-cup-duo"} {...others} />);
}

export default Component;
