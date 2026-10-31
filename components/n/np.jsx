import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfcsg_hz.css';
import '../../css/j/j0kbmbb8h.css';
import '../../css/e/eka-bfbky.css';
import '../../css/k/kpfdj5w7p.css';
import '../../css/o/oecs5sbop.css';
import '../../css/d/diq9bmbiu.css';
import '../../css/b/bm2hzgnxg.css';

const viewBox = {"width":301,"height":380};
const content = `<g class="ft5dv1b6b"><path class="xzfcsg_hz"/><path class="j0kbmbb8h"/><path class="eka-bfbky"/><ellipse class="kpfdj5w7p"/><path class="oecs5sbop"/><path class="diq9bmbiu"/><path class="bm2hzgnxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:np"} {...others} />);
}

export default Component;
