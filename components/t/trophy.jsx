import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htgqrzeyb.css';
import '../../css/w/whwg07q6k.css';
import '../../css/q/q_bf21bmv.css';
import '../../css/q/qa6o82bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="htgqrzeyb"/><path class="whwg07q6k"/><path class="q_bf21bmv"/><path class="qa6o82bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:trophy"} {...others} />);
}

export default Component;
