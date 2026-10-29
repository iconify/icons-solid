import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s89kpjsxi.css';
import '../../css/q/q2s6zvbuh.css';
import '../../css/p/p51kjbcdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s89kpjsxi"/><path class="q2s6zvbuh wm-shadow"/><path class="p51kjbcdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-round-engrave"} {...others} />);
}

export default Component;
