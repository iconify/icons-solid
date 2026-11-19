import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qui5yeb9c.css';
import '../../css/m/mrj9dgbse.css';
import '../../css/i/izb20nb-l.css';
import '../../css/r/r3f7msjtg.css';
import '../../css/n/n6hdrpbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qui5yeb9c"/><path class="mrj9dgbse"/><path class="izb20nb-l"/><path class="r3f7msjtg"/><path class="n6hdrpbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:server-restore"} {...others} />);
}

export default Component;
