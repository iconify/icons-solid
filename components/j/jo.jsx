import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-ootbbzy.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/d/dlnon9b-j.css';
import '../../css/t/traj52aqq.css';
import '../../css/s/sf5b5qe3m.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="x-ootbbzy"/><path class="bc4gh5bbk"/><path class="dlnon9b-j"/><path class="traj52aqq"/><path class="sf5b5qe3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:jo"} {...others} />);
}

export default Component;
