import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pz86ohb8n.css';
import '../../css/d/d2tgt8bqb.css';
import '../../css/p/phun9vjav.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pz86ohb8n"/><path class="d2tgt8bqb"/><path class="phun9vjav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:arduino-plus-minus-1"} {...others} />);
}

export default Component;
