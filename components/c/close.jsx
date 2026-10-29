import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbcia_b3g.css';
import '../../css/j/j6glimpye.css';
import '../../css/g/g_1muabjw.css';
import '../../css/e/ep8gmbasp.css';
import '../../css/x/xhlpwnb6u.css';
import '../../css/k/k_kzqqbrz.css';
import '../../css/c/cuzau5dom.css';
import '../../css/r/r_km4mzbi.css';
import '../../css/m/m6kbjebea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbcia_b3g wm-shadow"/><path class="j6glimpye wm-shadow"/><path class="g_1muabjw"/><path class="ep8gmbasp"/><path class="xhlpwnb6u"/><path class="k_kzqqbrz"/><path class="cuzau5dom wm-shine"/><path class="r_km4mzbi wm-shine"/><path class="m6kbjebea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:close"} {...others} />);
}

export default Component;
