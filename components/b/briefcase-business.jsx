import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t4320ibyt.css';
import '../../css/n/n4blp6gba.css';
import '../../css/z/z9hx2qbhi.css';
import '../../css/m/m42b5943w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t4320ibyt wm-k"/><path class="n4blp6gba wm-s"/><path class="z9hx2qbhi"/><path class="m42b5943w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:briefcase-business"} {...others} />);
}

export default Component;
