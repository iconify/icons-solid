import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uvbus5bkk.css';
import '../../css/c/c-lvbj2xn.css';
import '../../css/b/bk_2j6bja.css';
import '../../css/k/kxrlzfb-u.css';
import '../../css/u/ugk7yrm0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uvbus5bkk"/><path class="c-lvbj2xn wm-k"/><path class="bk_2j6bja wm-a"/><path class="kxrlzfb-u wm-k"/><path class="ugk7yrm0d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sky-lantern-sketch"} {...others} />);
}

export default Component;
