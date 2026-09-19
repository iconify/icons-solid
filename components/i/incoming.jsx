import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/z/za16zq30v.css';
import '../../css/u/uhb_xfdrf.css';
import '../../css/z/za05k_qrs.css';
import '../../css/s/s8er5u2sf.css';
import '../../css/p/pwa_1ubir.css';
import '../../css/d/d9zg50b2w.css';
import '../../css/b/b533hcelw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="za16zq30v"/><path class="uhb_xfdrf"/><path class="za05k_qrs"/><path class="s8er5u2sf"/><path class="pwa_1ubir"/><path class="d9zg50b2w"/><path class="b533hcelw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:incoming"} {...others} />);
}

export default Component;
