import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvx2-wz1f.css';
import '../../css/w/w1ncuybvs.css';
import '../../css/i/iqtgf6_ep.css';
import '../../css/p/p7urw3b3g.css';
import '../../css/c/crnlojobl.css';
import '../../css/f/fgu4fdbms.css';
import '../../css/d/dlwo2obiv.css';
import '../../css/l/lgfxd7bpj.css';
import '../../css/l/l48cegt8c.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><path class="vvx2-wz1f"/><path class="w1ncuybvs"/><path class="iqtgf6_ep"/><path class="p7urw3b3g"/><path class="crnlojobl"/><path class="fgu4fdbms"/><path class="dlwo2obiv"/><path class="lgfxd7bpj"/><path class="l48cegt8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tianji-light"} {...others} />);
}

export default Component;
