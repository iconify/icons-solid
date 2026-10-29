import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w6n12bf4c.css';
import '../../css/m/mofnaebna.css';
import '../../css/g/g2gi1nbsb.css';
import '../../css/r/rds1m8b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w6n12bf4c"/><path class="mofnaebna wm-a"/><path class="g2gi1nbsb wm-k"/><path class="rds1m8b5p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-circuit-sketch"} {...others} />);
}

export default Component;
