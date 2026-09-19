import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/so8xpnbnk.css';
import '../../css/m/mivvaqbue.css';
import '../../css/i/ig3df1b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="so8xpnbnk"/><path class="mivvaqbue"/><circle class="ig3df1b8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mymind"} {...others} />);
}

export default Component;
