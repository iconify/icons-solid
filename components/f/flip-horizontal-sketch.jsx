import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ob57wqbrz.css';
import '../../css/l/ld7z2jb6a.css';
import '../../css/u/ufl9k1jov.css';
import '../../css/o/omw1mrbrl.css';
import '../../css/a/a2yziab9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ob57wqbrz wm-k"/><path class="ld7z2jb6a wm-a"/><path class="ufl9k1jov wm-k"/><path class="omw1mrbrl wm-a"/><path class="a2yziab9k wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flip-horizontal-sketch"} {...others} />);
}

export default Component;
