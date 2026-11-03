import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_rgy1sol.css';
import '../../css/v/v1begw9tr.css';
import '../../css/x/xbgj11bpa.css';
import '../../css/h/h150grijx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/nx_9e3w_t.css';
import '../../css/i/iul3cibqd.css';
import '../../css/a/ahd_g7qai.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x_rgy1sol"/><path class="v1begw9tr"/><path class="xbgj11bpa"/><path class="h150grijx"/><g class="ij2x_72vy"><path class="nx_9e3w_t"/><path class="iul3cibqd"/><path class="ahd_g7qai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:castle"} {...others} />);
}

export default Component;
