import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lvw18b2_r.css';
import '../../css/m/mqpblfbzu.css';
import '../../css/d/d5gn_rbcl.css';
import '../../css/r/rtsyq6gvw.css';
import '../../css/b/b7x3i0eze.css';
import '../../css/w/wikm4xboq.css';
import '../../css/z/zityrybea.css';
import '../../css/v/vk9ktsboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lvw18b2_r wm-a"/><path class="mqpblfbzu wm-a"/><path class="d5gn_rbcl wm-k"/><path class="rtsyq6gvw wm-k"/><path class="b7x3i0eze wm-k"/><path class="wikm4xboq wm-k"/><path class="wm-k zityrybea"/><path class="vk9ktsboo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:dna"} {...others} />);
}

export default Component;
