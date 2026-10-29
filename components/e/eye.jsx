import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4e545big.css';
import '../../css/o/o8fbv3dpa.css';
import '../../css/i/ixvbrihcw.css';
import '../../css/b/bqxo78b1t.css';
import '../../css/r/rdjyzybym.css';
import '../../css/m/mqu0nybte.css';
import '../../css/n/n97plzn2h.css';
import '../../css/e/e_gdwgfyj.css';
import '../../css/d/d-tb0sbvj.css';
import '../../css/i/i6q94zbze.css';
import '../../css/d/d5h_1lfbk.css';
import '../../css/m/m74e0ebrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4e545big wm-shadow"/><path class="o8fbv3dpa wm-k"/><path class="ixvbrihcw wm-k"/><path class="bqxo78b1t wm-k"/><path class="rdjyzybym wm-k"/><path class="mqu0nybte wm-a"/><path class="n97plzn2h wm-a"/><path class="e_gdwgfyj wm-a"/><path class="d-tb0sbvj wm-a"/><path class="i6q94zbze wm-a"/><path class="d5h_1lfbk wm-a"/><path class="m74e0ebrs wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:eye"} {...others} />);
}

export default Component;
