import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e27us5bmu.css';
import '../../css/b/b2jac_byq.css';
import '../../css/r/r_at6qctj.css';
import '../../css/n/nhkct-b9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e27us5bmu wm-k"/><path class="b2jac_byq"/><path class="r_at6qctj"/><path class="nhkct-b9c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plug-zap"} {...others} />);
}

export default Component;
