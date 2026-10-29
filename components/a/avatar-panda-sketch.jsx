import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xddy8fb2y.css';
import '../../css/p/pa-3jhbbm.css';
import '../../css/m/m1th99r3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xddy8fb2y"/><path class="pa-3jhbbm wm-k"/><path class="m1th99r3a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-panda-sketch"} {...others} />);
}

export default Component;
