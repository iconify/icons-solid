import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm_oqzblj.css';
import '../../css/q/q1_hfobpg.css';
import '../../css/i/ikr1j0bao.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="cm_oqzblj"/><path class="q1_hfobpg"/><path class="ikr1j0bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:nl"} {...others} />);
}

export default Component;
