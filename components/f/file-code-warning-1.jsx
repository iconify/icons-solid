import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0_eb-w-b.css';
import '../../css/m/mwysubbyf.css';
import '../../css/n/nogm3vbta.css';
import '../../css/q/q2hipcc0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q0_eb-w-b"/><path class="mwysubbyf"/><path class="nogm3vbta"/><path class="q2hipcc0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:file-code-warning-1"} {...others} />);
}

export default Component;
