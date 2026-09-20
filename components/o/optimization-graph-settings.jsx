import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p907x47-t.css';
import '../../css/n/n3xytbcmz.css';
import '../../css/b/bzh-1hb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p907x47-t"/><path class="n3xytbcmz"/><path class="bzh-1hb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:optimization-graph-settings"} {...others} />);
}

export default Component;
