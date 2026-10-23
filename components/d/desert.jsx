import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh263_jsa.css';
import '../../css/m/mgtt24brm.css';
import '../../css/o/ohvfq_b9q.css';
import '../../css/w/wb5nwwbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wh263_jsa"/><path class="mgtt24brm"/><path class="ohvfq_b9q"/><path class="wb5nwwbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:desert"} {...others} />);
}

export default Component;
