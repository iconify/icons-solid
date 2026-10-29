import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/favheljet.css';
import '../../css/r/r90zuab0u.css';
import '../../css/u/u_1ogdcfb.css';
import '../../css/b/bbkvi1b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="favheljet wm-k"/><path class="r90zuab0u wm-a"/><path class="u_1ogdcfb wm-k"/><path class="bbkvi1b5u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-sketch"} {...others} />);
}

export default Component;
