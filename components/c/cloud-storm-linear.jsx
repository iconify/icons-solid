import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dnx6-ffqn.css';
import '../../css/v/vbgcwqb6e.css';
import '../../css/g/gg8959b3b.css';
import '../../css/v/vc-_sxbhn.css';
import '../../css/h/h0jjm6eep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dnx6-ffqn"/><path class="vbgcwqb6e"/><path class="gg8959b3b"/><path class="vc-_sxbhn"/><path class="h0jjm6eep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storm-linear"} {...others} />);
}

export default Component;
