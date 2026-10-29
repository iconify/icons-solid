import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r6ne5ub5z.css';
import '../../css/k/kvtx_h5hu.css';
import '../../css/b/bxjv56brc.css';
import '../../css/s/sqt-7jbtw.css';
import '../../css/z/zcdoimbco.css';
import '../../css/p/peqi26xdy.css';
import '../../css/i/iku1ywbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r6ne5ub5z wm-deco"/><path class="kvtx_h5hu wm-deco"/><path class="bxjv56brc wm-deco"/><path class="sqt-7jbtw wm-k"/><path class="wm-k zcdoimbco"/><path class="peqi26xdy wm-a"/><path class="iku1ywbvc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-fox-blueprint"} {...others} />);
}

export default Component;
