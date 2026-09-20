import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0mwp1bqm.css';
import '../../css/o/oh3bw7brl.css';
import '../../css/v/vr0fsbmwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d0mwp1bqm"/><path class="oh3bw7brl"/><path class="vr0fsbmwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:podcast-microphone-international-1"} {...others} />);
}

export default Component;
