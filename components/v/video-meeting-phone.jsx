import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2wf-lb2q.css';
import '../../css/d/dry-ruygo.css';
import '../../css/i/i30dracbb.css';
import '../../css/r/ro95a6k8q.css';
import '../../css/s/ssgj8li8g.css';
import '../../css/h/hkb32_isu.css';
import '../../css/x/xszkf6lrj.css';
import '../../css/v/vvf0r6b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2wf-lb2q"/><path class="dry-ruygo"/><path class="i30dracbb"/><path class="ro95a6k8q"/><path class="ssgj8li8g"/><path class="hkb32_isu"/><path class="xszkf6lrj"/><path class="vvf0r6b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:video-meeting-phone"} {...others} />);
}

export default Component;
