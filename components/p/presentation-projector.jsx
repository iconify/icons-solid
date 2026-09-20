import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vlccl_j5f.css';
import '../../css/q/qai0uwb9u.css';
import '../../css/w/w9768wbws.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vlccl_j5f"/><path class="qai0uwb9u"/><path class="w9768wbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:presentation-projector"} {...others} />);
}

export default Component;
