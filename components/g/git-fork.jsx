import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uazb19x4t.css';
import '../../css/n/nu3pjrtmx.css';
import '../../css/p/pmyvgs41w.css';
import '../../css/o/oslxxsbrc.css';
import '../../css/r/rs5g_dbjy.css';
import '../../css/p/ptmme6y2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uazb19x4t wm-shadow"/><path class="nu3pjrtmx wm-shadow"/><path class="pmyvgs41w"/><path class="oslxxsbrc"/><path class="rs5g_dbjy"/><path class="ptmme6y2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-fork"} {...others} />);
}

export default Component;
