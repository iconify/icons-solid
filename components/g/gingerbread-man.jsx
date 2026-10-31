import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7tha4oib.css';
import '../../css/t/tam256bog.css';
import '../../css/p/pluooo9-w.css';
import '../../css/s/se8v5vbpw.css';
import '../../css/p/p6xgurz8n.css';
import '../../css/u/ub3gd-bcm.css';
import '../../css/f/f0fbsd7df.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s7tha4oib wm-k"/><path class="tam256bog wm-deco"/><path class="pluooo9-w wm-k"/><path class="se8v5vbpw wm-k"/><path class="p6xgurz8n wm-shadow"/><path class="ub3gd-bcm wm-shine"/><path class="f0fbsd7df wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:gingerbread-man"} {...others} />);
}

export default Component;
