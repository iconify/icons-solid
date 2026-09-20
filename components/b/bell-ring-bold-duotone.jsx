import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-hi-wsol.css';
import '../../css/p/psb9smbpn.css';
import '../../css/p/p1d6cybfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m-hi-wsol"/><path class="psb9smbpn"/><path class="p1d6cybfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-ring-bold-duotone"} {...others} />);
}

export default Component;
