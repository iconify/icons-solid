import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-np-lugv.css';
import '../../css/k/k2bzdov1f.css';
import '../../css/f/f3qnnebnv.css';
import '../../css/m/mhocarb4a.css';
import '../../css/n/n973irrll.css';
import '../../css/u/ua1wb5bns.css';
import '../../css/g/groun_bdd.css';
import '../../css/l/li4_05bul.css';
import '../../css/t/td806vbwl.css';
import '../../css/w/wa7j0bc8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-np-lugv wm-k"/><path class="k2bzdov1f wm-k"/><path class="f3qnnebnv wm-k"/><path class="mhocarb4a wm-a"/><path class="n973irrll wm-a"/><path class="ua1wb5bns wm-a"/><path class="groun_bdd wm-k"/><path class="li4_05bul wm-a"/><path class="td806vbwl wm-a"/><path class="wa7j0bc8u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-code"} {...others} />);
}

export default Component;
