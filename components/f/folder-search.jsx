import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/q/qtql_xblt.css';
import '../../css/h/h_e__xbco.css';
import '../../css/j/j-jwpkb8s.css';
import '../../css/u/uy3t-nfle.css';
import '../../css/h/h8ovhqxti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="qtql_xblt"/><path class="h_e__xbco"/><path class="j-jwpkb8s"/><path class="uy3t-nfle"/><path class="h8ovhqxti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-search"} {...others} />);
}

export default Component;
