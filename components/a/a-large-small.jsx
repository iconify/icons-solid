import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0ridz8zs.css';
import '../../css/n/nfi2j3b0t.css';
import '../../css/i/ix52ark0n.css';
import '../../css/e/e3409ud_e.css';
import '../../css/z/zq8zcghnx.css';
import '../../css/z/zvbd124hv.css';
import '../../css/r/r4oo0bgdf.css';
import '../../css/q/qdp_v6z-w.css';
import '../../css/x/x0jphw_tx.css';
import '../../css/c/cqpj7sl8b.css';
import '../../css/l/la6b9gj4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p0ridz8zs wm-shadow"/><path class="nfi2j3b0t wm-a"/><path class="ix52ark0n wm-a"/><path class="e3409ud_e wm-a"/><path class="wm-a zq8zcghnx"/><path class="wm-shine zvbd124hv"/><path class="r4oo0bgdf wm-k"/><path class="qdp_v6z-w wm-k"/><path class="wm-k x0jphw_tx"/><path class="cqpj7sl8b wm-k"/><path class="la6b9gj4q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:a-large-small"} {...others} />);
}

export default Component;
