import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/d/dfshi5fhj.css';
import '../../css/t/tjd07yb8z.css';
import '../../css/f/fdf08cccu.css';
import '../../css/k/kpm7cn8db.css';
import '../../css/d/dnktopiii.css';
import '../../css/l/lgu-u6bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="dfshi5fhj wm-k"/><path class="tjd07yb8z wm-k"/><path class="fdf08cccu wm-shine"/><path class="kpm7cn8db wm-a"/><path class="dnktopiii wm-a"/><path class="lgu-u6bhk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:plus-circle"} {...others} />);
}

export default Component;
