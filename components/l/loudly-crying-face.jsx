import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/r/rv6d_n19x.css';
import '../../css/p/p-94simbr.css';
import '../../css/q/qh46r7bte.css';
import '../../css/x/xjc_jz8le.css';
import '../../css/f/f4_opsbub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="rv6d_n19x"/><path class="p-94simbr"/><path class="qh46r7bte"/><path class="xjc_jz8le"/><path class="f4_opsbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:loudly-crying-face"} {...others} />);
}

export default Component;
