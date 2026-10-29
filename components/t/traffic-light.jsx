import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/snqok-bna.css';
import '../../css/g/gp8i_cbdv.css';
import '../../css/y/y4xgiqbap.css';
import '../../css/b/bzrak1i-s.css';
import '../../css/i/ikweqcbsc.css';
import '../../css/f/fpcmkeb_l.css';
import '../../css/u/uexb_cbms.css';
import '../../css/v/vazli-m0u.css';
import '../../css/g/g_nw7bcew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="snqok-bna wm-shadow"/><path class="gp8i_cbdv"/><path class="y4xgiqbap"/><path class="bzrak1i-s"/><path class="ikweqcbsc"/><path class="fpcmkeb_l"/><path class="uexb_cbms"/><path class="vazli-m0u wm-shine"/><path class="g_nw7bcew wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:traffic-light"} {...others} />);
}

export default Component;
