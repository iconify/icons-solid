import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ez9x80j4p.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/j1qhtkeny.css';
import '../../css/g/gg_uh9bkk.css';
import '../../css/w/wbp_n2btd.css';
import '../../css/n/ndcljacyl.css';
import '../../css/u/uj8swy7bv.css';
import '../../css/y/yo362irno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ez9x80j4p wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="j1qhtkeny wm-k"/><circle class="gg_uh9bkk wm-k"/><circle class="wbp_n2btd wm-k"/><path class="ndcljacyl wm-a"/><circle class="uj8swy7bv wm-a"/><path class="wm-a yo362irno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dices-blueprint"} {...others} />);
}

export default Component;
