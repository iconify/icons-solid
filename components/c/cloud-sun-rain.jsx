import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngrlkzbns.css';
import '../../css/j/jk8nozw9x.css';
import '../../css/z/zvumpcbom.css';
import '../../css/i/ijvemhbnp.css';
import '../../css/j/jv83oqwpw.css';
import '../../css/x/xapxd7bcg.css';
import '../../css/f/fdkp49b2s.css';
import '../../css/n/n7bypgb8o.css';
import '../../css/q/quzd33bzt.css';
import '../../css/y/yy341uk8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ngrlkzbns wm-k"/><path class="jk8nozw9x wm-a"/><path class="wm-s zvumpcbom"/><path class="ijvemhbnp wm-deco"/><path class="jv83oqwpw wm-k"/><path class="wm-a xapxd7bcg"/><path class="fdkp49b2s wm-s"/><path class="n7bypgb8o wm-shadow"/><path class="quzd33bzt wm-shine"/><path class="wm-shine yy341uk8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:cloud-sun-rain"} {...others} />);
}

export default Component;
