import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wkvs_kbmi.css';
import '../../css/a/awy5bl93d.css';
import '../../css/t/tc-71ofol.css';
import '../../css/r/rv6d_n19x.css';
import '../../css/m/m8h2djb9f.css';
import '../../css/n/ntxaat_tl.css';
import '../../css/k/k2asp1bim.css';
import '../../css/g/gz_sdtb1f.css';
import '../../css/z/zb9-q_b_j.css';
import '../../css/u/uti5t0bgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="wkvs_kbmi"/><path class="awy5bl93d"/><path class="tc-71ofol"/><path class="rv6d_n19x"/><path class="m8h2djb9f"/><path class="ntxaat_tl"/><path class="k2asp1bim"/><path class="gz_sdtb1f"/><path class="zb9-q_b_j"/><path class="uti5t0bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:crying-baby"} {...others} />);
}

export default Component;
