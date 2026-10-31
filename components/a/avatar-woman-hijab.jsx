import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a-cdanpyt.css';
import '../../css/n/nc26hfb3o.css';
import '../../css/n/n340e-phs.css';
import '../../css/e/ent03rbyx.css';
import '../../css/b/batuanb6b.css';
import '../../css/r/rfh-ydmzf.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a-cdanpyt wm-shadow"/><path class="nc26hfb3o"/><path class="n340e-phs"/><path class="ent03rbyx"/><path class="batuanb6b"/><path class="rfh-ydmzf"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-woman-hijab"} {...others} />);
}

export default Component;
