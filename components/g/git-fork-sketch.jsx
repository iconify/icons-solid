import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dn3saf1hp.css';
import '../../css/b/bentd_y0y.css';
import '../../css/s/stx585s_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dn3saf1hp"/><path class="bentd_y0y"/><path class="stx585s_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-fork-sketch"} {...others} />);
}

export default Component;
