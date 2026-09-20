import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smg6drbrb.css';
import '../../css/q/q4kr8xbcz.css';
import '../../css/i/iaosuyb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smg6drbrb"/><path class="q4kr8xbcz"/><path class="iaosuyb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:moving-walkway-luggage-1"} {...others} />);
}

export default Component;
