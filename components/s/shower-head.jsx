import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h7ciwbkot.css';
import '../../css/r/rlvmsgbrc.css';
import '../../css/k/kcx1t5r2r.css';
import '../../css/c/c8ge6iu5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h7ciwbkot wm-k"/><path class="rlvmsgbrc"/><path class="kcx1t5r2r"/><path class="c8ge6iu5i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shower-head"} {...others} />);
}

export default Component;
