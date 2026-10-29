import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yaz_bwb9u.css';
import '../../css/x/x1ua-iboa.css';
import '../../css/i/ig60tacrg.css';
import '../../css/k/kgfx3e43q.css';
import '../../css/b/bp6vi_8jb.css';
import '../../css/y/yt69a67rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yaz_bwb9u"/><path class="wm-a x1ua-iboa"/><path class="ig60tacrg wm-shadow"/><path class="kgfx3e43q wm-a"/><path class="bp6vi_8jb wm-k"/><path class="wm-a yt69a67rh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microscope-engrave"} {...others} />);
}

export default Component;
