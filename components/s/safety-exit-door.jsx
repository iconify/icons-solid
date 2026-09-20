import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ioyzf9b-l.css';
import '../../css/i/irxnizetc.css';
import '../../css/j/j1gloz0wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ioyzf9b-l"/><path class="irxnizetc"/><path class="j1gloz0wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:safety-exit-door"} {...others} />);
}

export default Component;
