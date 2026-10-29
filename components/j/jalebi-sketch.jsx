import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pjoarub1b.css';
import '../../css/z/zxnyw2byw.css';
import '../../css/g/gkgzykt4b.css';
import '../../css/f/fyvo1qg6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pjoarub1b wm-deco"/><path class="wm-k zxnyw2byw"/><path class="gkgzykt4b wm-k"/><path class="fyvo1qg6w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jalebi-sketch"} {...others} />);
}

export default Component;
