import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnsu7kb_e.css';
import '../../css/j/j9x-s9bwq.css';
import '../../css/u/uq5pxe-0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnsu7kb_e"/><path class="j9x-s9bwq"/><path class="uq5pxe-0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:share-user-signal-1"} {...others} />);
}

export default Component;
