import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xquqyfblz.css';
import '../../css/w/w9t98ac2y.css';
import '../../css/x/xk1bogqxz.css';
import '../../css/b/bwni0_j2d.css';
import '../../css/d/d1up9g-eu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xquqyfblz"/><path class="w9t98ac2y wm-a"/><path class="wm-shadow xk1bogqxz"/><path class="bwni0_j2d wm-k"/><path class="d1up9g-eu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hammer-engrave"} {...others} />);
}

export default Component;
