import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q_xx7ncgw.css';
import '../../css/r/rkjw2wbas.css';
import '../../css/h/hpz6d-b6h.css';
import '../../css/l/lpt-7tbgr.css';
import '../../css/r/rb2w4qb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q_xx7ncgw wm-deco"/><path class="rkjw2wbas wm-deco"/><path class="hpz6d-b6h wm-deco"/><path class="lpt-7tbgr"/><path class="rb2w4qb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-zap-blueprint"} {...others} />);
}

export default Component;
