import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/php117btp.css';
import '../../css/m/mlez1ebwz.css';
import '../../css/i/i95o0obpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="php117btp"/><path class="mlez1ebwz"/><path class="i95o0obpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:office-worker"} {...others} />);
}

export default Component;
