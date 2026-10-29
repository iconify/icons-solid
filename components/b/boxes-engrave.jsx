import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tm5umt8cw.css';
import '../../css/k/k11v7xbdk.css';
import '../../css/y/y6iojqb3m.css';
import '../../css/r/r81zoppqz.css';
import '../../css/n/n_2k4vxva.css';
import '../../css/c/c2th96roa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tm5umt8cw"/><path class="k11v7xbdk wm-shadow"/><path class="y6iojqb3m"/><path class="r81zoppqz"/><path class="n_2k4vxva"/><path class="c2th96roa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:boxes-engrave"} {...others} />);
}

export default Component;
