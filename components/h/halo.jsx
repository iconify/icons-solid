import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/d/dy9b8i7dq.css';
import '../../css/d/dxaktsk1o.css';
import '../../css/f/fa_8d7bvu.css';
import '../../css/d/dtf5sfb_d.css';
import '../../css/n/ne8jorb-s.css';
import '../../css/l/l2gajq96w.css';
import '../../css/q/qxhs_dbqo.css';
import '../../css/a/ao22c357s.css';
import '../../css/a/ao0idi-xr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r2b3htb0e"/><path class="dy9b8i7dq"/><path class="dxaktsk1o"/><path class="fa_8d7bvu"/><path class="dtf5sfb_d"/><path class="ne8jorb-s"/><path class="l2gajq96w"/><path class="qxhs_dbqo"/><path class="ao22c357s"/><path class="ao0idi-xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:halo"} {...others} />);
}

export default Component;
