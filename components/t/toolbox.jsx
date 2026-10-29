import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9lq-0bsu.css';
import '../../css/s/spa5w1b_u.css';
import '../../css/b/b3fp9-wfe.css';
import '../../css/p/pj47wlbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d9lq-0bsu"/><path class="spa5w1b_u"/><path class="b3fp9-wfe"/><path class="pj47wlbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:toolbox"} {...others} />);
}

export default Component;
