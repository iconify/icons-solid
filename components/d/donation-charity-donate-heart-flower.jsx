import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dwfi71bts.css';
import '../../css/l/ly-4xl71z.css';
import '../../css/q/qa44sh2jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dwfi71bts"/><path class="ly-4xl71z"/><path class="qa44sh2jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:donation-charity-donate-heart-flower"} {...others} />);
}

export default Component;
