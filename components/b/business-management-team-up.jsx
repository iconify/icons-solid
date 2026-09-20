import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oztnlvq4i.css';
import '../../css/x/x3xkrjwsf.css';
import '../../css/g/grpweky-m.css';
import '../../css/u/u55g-2b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oztnlvq4i"/><path class="x3xkrjwsf"/><path class="grpweky-m"/><path class="u55g-2b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-management-team-up"} {...others} />);
}

export default Component;
