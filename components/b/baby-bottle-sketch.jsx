import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ohuffjtyw.css';
import '../../css/e/e1-igfbjx.css';
import '../../css/k/k2nqr3qwy.css';
import '../../css/m/mb8e5acns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ohuffjtyw"/><path class="e1-igfbjx wm-k"/><path class="k2nqr3qwy wm-k"/><path class="mb8e5acns wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby-bottle-sketch"} {...others} />);
}

export default Component;
