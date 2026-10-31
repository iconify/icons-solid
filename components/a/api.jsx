import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exwrc0-ch.css';
import '../../css/d/du6iyw0-e.css';
import '../../css/q/q004wrbdd.css';
import '../../css/a/aucke0j8h.css';
import '../../css/l/lrt2vrbvw.css';
import '../../css/g/gkf7ibb_e.css';
import '../../css/g/gv14ftbgr.css';
import '../../css/e/e93rsr_ts.css';
import '../../css/h/hynl5qvlz.css';
import '../../css/x/x2nnlr2ic.css';
import '../../css/g/ggdlbub8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="exwrc0-ch"><path class="du6iyw0-e wm-shadow"/><path class="q004wrbdd wm-shadow"/><path class="aucke0j8h wm-shadow"/><path class="lrt2vrbvw wm-shadow"/><path class="gkf7ibb_e wm-shadow"/><path class="gv14ftbgr wm-shadow"/><path class="e93rsr_ts wm-a"/><path class="hynl5qvlz wm-k"/><path class="wm-a x2nnlr2ic"/><path class="ggdlbub8h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:api"} {...others} />);
}

export default Component;
