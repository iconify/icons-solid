import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhvq5rbpq.css';
import '../../css/c/ck_36nb7d.css';
import '../../css/b/bs4f16w-a.css';
import '../../css/t/tfljhbtgi.css';
import '../../css/q/qnbx439gp.css';
import '../../css/o/oqgfbnb7j.css';
import '../../css/h/hz3wrzuov.css';
import '../../css/t/tzbdocc_u.css';
import '../../css/q/qr4owab-u.css';
import '../../css/w/wqx3v3giq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dhvq5rbpq wm-k"/><path class="ck_36nb7d wm-k"/><path class="bs4f16w-a wm-k"/><path class="tfljhbtgi wm-shine"/><path class="qnbx439gp wm-k"/><path class="oqgfbnb7j wm-k"/><path class="hz3wrzuov wm-k"/><path class="tzbdocc_u wm-k"/><path class="qr4owab-u wm-k"/><path class="wm-k wqx3v3giq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:align-center"} {...others} />);
}

export default Component;
