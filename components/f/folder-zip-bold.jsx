import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aacscibqs.css';
import '../../css/e/eb5tcvbtp.css';
import '../../css/s/sfauigbbe.css';
import '../../css/i/ifa-yz19u.css';
import '../../css/r/rrwbpbbol.css';
import '../../css/p/pizwsrbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aacscibqs"/><path clip-rule="evenodd" class="eb5tcvbtp"/><path class="sfauigbbe"/><path class="ifa-yz19u"/><path class="rrwbpbbol"/><path class="pizwsrbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-zip-bold"} {...others} />);
}

export default Component;
