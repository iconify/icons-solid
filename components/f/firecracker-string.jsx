import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vgxyyhbte.css';
import '../../css/l/l81190bjf.css';
import '../../css/x/xs1uylbmg.css';
import '../../css/x/xw_wnepym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vgxyyhbte wm-k"/><path class="l81190bjf"/><path class="xs1uylbmg"/><path class="wm-s xw_wnepym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:firecracker-string"} {...others} />);
}

export default Component;
