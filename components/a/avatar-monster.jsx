import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gklf7-bma.css';
import '../../css/m/m298yub2x.css';
import '../../css/r/r_iwbcdvf.css';
import '../../css/l/loekhew4e.css';
import '../../css/n/nxec4mbey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gklf7-bma wm-k"/><path class="m298yub2x wm-a"/><path class="r_iwbcdvf wm-k"/><path class="loekhew4e"/><path class="nxec4mbey wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-monster"} {...others} />);
}

export default Component;
