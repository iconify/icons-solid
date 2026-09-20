import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y8nybabeo.css';
import '../../css/l/l8vij0bsq.css';
import '../../css/o/oknrl4eqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y8nybabeo"/><path class="l8vij0bsq"/><path class="oknrl4eqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:desktop-action-monitor-add"} {...others} />);
}

export default Component;
