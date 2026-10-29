import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkfydwfln.css';
import '../../css/p/p-vb1sb6r.css';
import '../../css/d/d-fp9xb7n.css';
import '../../css/j/j1_6urbwd.css';
import '../../css/q/qn85vibkl.css';
import '../../css/m/mhusmpdfo.css';
import '../../css/m/mgez3ofhl.css';
import '../../css/q/qpp70ynjg.css';
import '../../css/x/x4lozqbin.css';
import '../../css/n/nwejs9bcb.css';
import '../../css/s/s3_ub8bum.css';
import '../../css/y/yysw16d2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkfydwfln wm-shadow"/><path class="p-vb1sb6r wm-k"/><path class="d-fp9xb7n wm-k"/><path class="j1_6urbwd wm-k"/><path class="qn85vibkl wm-k"/><path class="mhusmpdfo wm-k"/><path class="mgez3ofhl wm-shine"/><path class="qpp70ynjg wm-k"/><path class="wm-k x4lozqbin"/><path class="nwejs9bcb wm-k"/><path class="s3_ub8bum wm-s"/><path class="wm-s yysw16d2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lion-head"} {...others} />);
}

export default Component;
