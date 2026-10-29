import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fu9g10bff.css';
import '../../css/r/rchvh1bpr.css';
import '../../css/z/zvpur5thu.css';
import '../../css/c/c5b0y0tyz.css';
import '../../css/b/b5x9xi0bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fu9g10bff wm-k"/><path class="rchvh1bpr wm-a"/><path class="wm-shadow zvpur5thu"/><path class="c5b0y0tyz wm-k"/><path class="b5x9xi0bu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:copy-engrave"} {...others} />);
}

export default Component;
