import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vx6efwbom.css';
import '../../css/s/sggmu1k-u.css';
import '../../css/w/wegv8ubva.css';
import '../../css/g/gbekqnf1i.css';
import '../../css/k/k9l_7lbvy.css';
import '../../css/k/k7owx3bzp.css';
import '../../css/t/t-ekk46-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vx6efwbom wm-shadow"/><path class="sggmu1k-u"/><path class="wegv8ubva"/><path class="gbekqnf1i"/><path class="k9l_7lbvy"/><path class="k7owx3bzp wm-s"/><path class="t-ekk46-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:image-sparkles"} {...others} />);
}

export default Component;
