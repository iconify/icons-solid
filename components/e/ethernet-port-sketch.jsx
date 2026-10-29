import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j684kzbgo.css';
import '../../css/n/ndzwtnbsc.css';
import '../../css/q/q26pnyb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j684kzbgo"/><path class="ndzwtnbsc wm-k"/><path class="q26pnyb0v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ethernet-port-sketch"} {...others} />);
}

export default Component;
