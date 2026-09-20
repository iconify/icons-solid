import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mrdllpb7f.css';
import '../../css/u/uppyu2lrf.css';
import '../../css/t/tpz7t9qvo.css';
import '../../css/s/s_wa2mb4r.css';
import '../../css/n/nqicz80dr.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="mrdllpb7f"/><path class="uppyu2lrf"/><path class="tpz7t9qvo"/><path class="s_wa2mb4r"/><path class="nqicz80dr"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:watch-circle-filled"} {...others} />);
}

export default Component;
