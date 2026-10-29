import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zmbsi_bwd.css';
import '../../css/u/uhhdb_4na.css';
import '../../css/x/xuuhzvbpt.css';
import '../../css/w/wsgjttzmk.css';
import '../../css/v/vmnr9nb3m.css';
import '../../css/a/ai6g01b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zmbsi_bwd"/><path class="uhhdb_4na wm-deco"/><path class="wm-deco xuuhzvbpt"/><path class="wm-k wsgjttzmk"/><path class="vmnr9nb3m wm-a"/><path class="ai6g01b2a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skip-forward-blueprint"} {...others} />);
}

export default Component;
