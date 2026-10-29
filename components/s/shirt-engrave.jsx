import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kp3j7tbra.css';
import '../../css/p/pdw9ohb6s.css';
import '../../css/w/w_97-qb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kp3j7tbra"/><path class="pdw9ohb6s wm-shadow"/><path class="w_97-qb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shirt-engrave"} {...others} />);
}

export default Component;
