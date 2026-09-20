import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjvr28b2f.css';
import '../../css/c/czct_nbnc.css';
import '../../css/q/q5dedrb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jjvr28b2f"/><path class="czct_nbnc"/><path class="q5dedrb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:laptop-action-warning"} {...others} />);
}

export default Component;
