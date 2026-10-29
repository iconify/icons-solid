import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cgf36yvjm.css';
import '../../css/f/fr09pvb7p.css';
import '../../css/k/kr0s17gbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cgf36yvjm"/><path class="fr09pvb7p wm-k"/><path class="kr0s17gbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-lock-sketch"} {...others} />);
}

export default Component;
