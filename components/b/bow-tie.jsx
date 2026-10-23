import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km--99blm.css';
import '../../css/q/qnv7s_syo.css';
import '../../css/j/js9awaccf.css';
import '../../css/v/vd7klxjsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="km--99blm"/><path class="qnv7s_syo"/><rect transform="matrix(0 -1 -1 0 14.42 15.55)" class="js9awaccf"/><path class="vd7klxjsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bow-tie"} {...others} />);
}

export default Component;
