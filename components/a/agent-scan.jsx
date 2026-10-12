import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o72h1fj_r.css';
import '../../css/w/w9uu0tr5w.css';
import '../../css/t/tmufy9b6b.css';
import '../../css/x/xvu_v82pz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="o72h1fj_r"/><path class="w9uu0tr5w"/><rect class="tmufy9b6b"/><path class="xvu_v82pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:agent-scan"} {...others} />);
}

export default Component;
