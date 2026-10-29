import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hqui4bbxw.css';
import '../../css/m/mflidkgwp.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/d/dokvecbou.css';
import '../../css/s/svzd488el.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hqui4bbxw wm-k"/><path class="mflidkgwp wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="dokvecbou wm-a"/><path class="svzd488el wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-business-engrave"} {...others} />);
}

export default Component;
