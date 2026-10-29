import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bl1p601fr.css';
import '../../css/c/cg13e3ftz.css';
import '../../css/i/i7ku8ibvc.css';
import '../../css/p/p1lg8rcuz.css';
import '../../css/s/slj835bqd.css';
import '../../css/y/yc_3dzbcv.css';
import '../../css/b/b4svt7b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bl1p601fr wm-k"/><path class="cg13e3ftz wm-a"/><path class="i7ku8ibvc wm-s"/><path class="p1lg8rcuz wm-shadow"/><path class="slj835bqd wm-k"/><path class="wm-a yc_3dzbcv"/><path class="b4svt7b_k wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mosque-engrave"} {...others} />);
}

export default Component;
