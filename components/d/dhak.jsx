import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/irxw7rpvu.css';
import '../../css/l/la-19z7wp.css';
import '../../css/c/cvr27pfvm.css';
import '../../css/q/qs-2l-_ei.css';
import '../../css/a/ahyp6uv4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="irxw7rpvu wm-k"/><path class="la-19z7wp wm-a"/><path class="cvr27pfvm wm-k"/><path class="qs-2l-_ei"/><path class="ahyp6uv4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dhak"} {...others} />);
}

export default Component;
