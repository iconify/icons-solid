import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vh29meufx.css';
import '../../css/g/g_s7kdbef.css';
import '../../css/f/fcdei6byr.css';
import '../../css/a/amklpt1ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vh29meufx"/><path class="g_s7kdbef"/><path class="fcdei6byr"/><path class="amklpt1ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:server-refresh-1"} {...others} />);
}

export default Component;
