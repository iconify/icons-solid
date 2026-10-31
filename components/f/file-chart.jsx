import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh9nrsbhn.css';
import '../../css/b/bsj4ij2dq.css';
import '../../css/h/hbahlac8l.css';
import '../../css/g/goe2albgd.css';
import '../../css/q/qau95ndpc.css';
import '../../css/c/cnc-a93bb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kh9nrsbhn wm-k"/><path class="bsj4ij2dq wm-deco"/><path class="hbahlac8l wm-k"/><path class="goe2albgd wm-k"/><path class="qau95ndpc wm-shadow"/><path class="cnc-a93bb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-chart"} {...others} />);
}

export default Component;
