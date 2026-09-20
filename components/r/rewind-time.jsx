import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tdxk8fb6w.css';
import '../../css/i/i3n02bb-n.css';
import '../../css/i/i1pto1bba.css';
import '../../css/d/dcpocbbnf.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tdxk8fb6w"/><path class="i3n02bb-n"/><path class="i1pto1bba"/><path class="dcpocbbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:rewind-time"} {...others} />);
}

export default Component;
