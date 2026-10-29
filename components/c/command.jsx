import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-fot6b-c.css';
import '../../css/v/vl5k1ub9b.css';
import '../../css/v/v53k5867k.css';
import '../../css/k/k0jbycb3g.css';
import '../../css/x/x13w9ccci.css';
import '../../css/i/ip0y5jb2r.css';
import '../../css/y/yjq1_5rqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p-fot6b-c wm-shadow"/><path class="vl5k1ub9b wm-k"/><path class="v53k5867k wm-k"/><path class="k0jbycb3g wm-k"/><path class="wm-k x13w9ccci"/><path class="ip0y5jb2r wm-k"/><path class="wm-k yjq1_5rqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:command"} {...others} />);
}

export default Component;
