import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bdoolsb7c.css';
import '../../css/d/dx-h-3bpj.css';
import '../../css/z/z4zmz-s8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bdoolsb7c"/><path class="dx-h-3bpj"/><path class="z4zmz-s8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-deal-men-cash-conversation"} {...others} />);
}

export default Component;
