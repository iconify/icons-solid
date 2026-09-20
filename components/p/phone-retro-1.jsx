import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jirnh6bkq.css';
import '../../css/p/pbiqa0bvs.css';
import '../../css/l/linv_ibmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jirnh6bkq"/><path class="pbiqa0bvs"/><path class="linv_ibmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:phone-retro-1"} {...others} />);
}

export default Component;
