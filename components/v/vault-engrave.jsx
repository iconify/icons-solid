import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nk8myvbrt.css';
import '../../css/e/e607we0qg.css';
import '../../css/y/yj_y3dp7d.css';
import '../../css/f/f48qsgb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nk8myvbrt wm-k"/><path class="e607we0qg wm-shadow"/><path class="wm-k yj_y3dp7d"/><path class="f48qsgb5t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vault-engrave"} {...others} />);
}

export default Component;
