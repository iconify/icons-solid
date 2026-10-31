import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bo12_d4vz.css';
import '../../css/e/e7560db5a.css';
import '../../css/q/qffqruxty.css';
import '../../css/y/yegbxl8nx.css';
import '../../css/y/yjwxsobjl.css';
import '../../css/p/p1-ego4dd.css';
import '../../css/m/m9gmrk2eq.css';
import '../../css/d/d3l27qb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bo12_d4vz wm-k"/><path class="e7560db5a wm-deco"/><path class="qffqruxty wm-k"/><path class="wm-k yegbxl8nx"/><path class="wm-shadow yjwxsobjl"/><path class="p1-ego4dd wm-shine"/><path class="m9gmrk2eq wm-shine"/><path class="d3l27qb2w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-circle-plus"} {...others} />);
}

export default Component;
