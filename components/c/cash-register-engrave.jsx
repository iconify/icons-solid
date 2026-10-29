import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkh_6h2do.css';
import '../../css/m/majtcdc7y.css';
import '../../css/m/mvtddkbrz.css';
import '../../css/q/qlkgjzbfl.css';
import '../../css/g/ghy1agb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mkh_6h2do wm-k"/><path class="majtcdc7y wm-a"/><path class="mvtddkbrz wm-shadow"/><path class="qlkgjzbfl wm-k"/><path class="ghy1agb1b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cash-register-engrave"} {...others} />);
}

export default Component;
