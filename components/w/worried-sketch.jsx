import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnmw6x9fk.css';
import '../../css/y/yi2d8monv.css';
import '../../css/m/me3p1obmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rnmw6x9fk wm-k"/><path class="wm-a yi2d8monv"/><path class="me3p1obmu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:worried-sketch"} {...others} />);
}

export default Component;
