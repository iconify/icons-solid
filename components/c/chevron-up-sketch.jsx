import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m2k9fhd-l.css';
import '../../css/s/sqrd_kulg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m2k9fhd-l wm-k"/><path class="sqrd_kulg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-up-sketch"} {...others} />);
}

export default Component;
