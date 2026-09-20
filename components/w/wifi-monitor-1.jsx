import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mplnyabyr.css';
import '../../css/g/gn_6abcxs.css';
import '../../css/t/twxul1b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mplnyabyr"/><path class="gn_6abcxs"/><path class="twxul1b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wifi-monitor-1"} {...others} />);
}

export default Component;
