import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/faql2ac0o.css';
import '../../css/f/ffyidnv2a.css';
import '../../css/d/dpfo8ffsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="faql2ac0o wm-k"/><path class="ffyidnv2a wm-s"/><path class="dpfo8ffsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:poinsettia"} {...others} />);
}

export default Component;
