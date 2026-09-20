import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6jdv5xki.css';
import '../../css/k/kspk4_oeg.css';
import '../../css/l/lav_9-bkq.css';
import '../../css/a/ax30oiq0a.css';
import '../../css/w/ws3epr_kb.css';
import '../../css/q/qyx4mxedf.css';
import '../../css/h/h32jkxbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="w6jdv5xki"/><path class="kspk4_oeg"/><circle class="lav_9-bkq"/><path class="ax30oiq0a"/><circle class="ws3epr_kb"/><path class="qyx4mxedf"/><path clip-rule="evenodd" class="h32jkxbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bullet-list-square-add"} {...others} />);
}

export default Component;
