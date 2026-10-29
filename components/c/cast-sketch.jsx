import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/od1pjlbrn.css';
import '../../css/a/akiqotlgz.css';
import '../../css/h/hmemabbvr.css';
import '../../css/k/k2u-005rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="od1pjlbrn wm-k"/><path class="akiqotlgz wm-a"/><path class="hmemabbvr wm-k"/><path class="k2u-005rj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cast-sketch"} {...others} />);
}

export default Component;
