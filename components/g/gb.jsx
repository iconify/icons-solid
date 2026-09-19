import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_gbeobcs.css';
import '../../css/x/x69uugbge.css';
import '../../css/n/nxikn_8ia.css';
import '../../css/b/b3b861ivx.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="l_gbeobcs"/><path class="x69uugbge"/><path class="nxikn_8ia"/><path class="b3b861ivx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gb"} {...others} />);
}

export default Component;
