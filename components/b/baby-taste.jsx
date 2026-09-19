import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wkvs_kbmi.css';
import '../../css/a/awy5bl93d.css';
import '../../css/t/tc-71ofol.css';
import '../../css/f/fetf87b-j.css';
import '../../css/b/bibsgkb6p.css';
import '../../css/k/ktk7g_msh.css';
import '../../css/o/os3qmeb9z.css';
import '../../css/z/zb9-q_b_j.css';
import '../../css/u/uti5t0bgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wkvs_kbmi"/><path class="awy5bl93d"/><path class="tc-71ofol"/><path class="fetf87b-j"/><path class="bibsgkb6p"/><path class="ktk7g_msh"/><path class="os3qmeb9z"/><path class="zb9-q_b_j"/><path class="uti5t0bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-taste"} {...others} />);
}

export default Component;
