import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vasjeabhq.css';
import '../../css/t/tm7zpbc8c.css';
import '../../css/g/g0vqqhtgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vasjeabhq"/><path class="tm7zpbc8c"/><path class="g0vqqhtgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:edit-pen-write-paper"} {...others} />);
}

export default Component;
