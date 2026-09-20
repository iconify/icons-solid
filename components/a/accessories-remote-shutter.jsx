import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ess-o-bzc.css';
import '../../css/i/i95p-zbal.css';
import '../../css/c/cdceoacpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ess-o-bzc"/><path class="i95p-zbal"/><path class="cdceoacpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accessories-remote-shutter"} {...others} />);
}

export default Component;
