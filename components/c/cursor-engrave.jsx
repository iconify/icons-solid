import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qxum5lb5g.css';
import '../../css/c/cz6jy1boo.css';
import '../../css/q/qvx_ar2cl.css';
import '../../css/c/cjivcabhf.css';
import '../../css/i/ivj0dyb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qxum5lb5g wm-k"/><path class="cz6jy1boo wm-a"/><path class="qvx_ar2cl wm-shadow"/><path class="cjivcabhf wm-k"/><path class="ivj0dyb1p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cursor-engrave"} {...others} />);
}

export default Component;
