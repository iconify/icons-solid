import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ta16obr8y.css';
import '../../css/f/fp3x473jc.css';
import '../../css/e/es86b-bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ta16obr8y"/><path class="fp3x473jc"/><path class="es86b-bnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:memory-sd-card-sync"} {...others} />);
}

export default Component;
