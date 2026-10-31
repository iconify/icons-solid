import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ndk_hsbgz.css';
import '../../css/h/hro4v6b4h.css';
import '../../css/a/absc_wbnh.css';
import '../../css/y/yu9681bhf.css';
import '../../css/q/qf8xdsqsi.css';
import '../../css/d/dn480dbke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ndk_hsbgz wm-shadow"/><path class="hro4v6b4h"/><path class="absc_wbnh"/><path class="yu9681bhf"/><path class="qf8xdsqsi"/><path class="dn480dbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ear"} {...others} />);
}

export default Component;
