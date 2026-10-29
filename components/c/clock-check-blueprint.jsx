import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xq1yojblm.css';
import '../../css/g/ge17oqt7q.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/j9pmjkbay.css';
import '../../css/f/f78e21b0t.css';
import '../../css/h/hjz_nrpwd.css';
import '../../css/o/obnp-qb7o.css';
import '../../css/x/x677x9l5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xq1yojblm"/><path class="ge17oqt7q wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="j9pmjkbay wm-k"/><path class="f78e21b0t wm-a"/><path class="hjz_nrpwd wm-s"/><path class="obnp-qb7o wm-k"/><path class="wm-s x677x9l5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check-blueprint"} {...others} />);
}

export default Component;
