import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z0gawebmo.css';
import '../../css/n/nnl4rjbje.css';
import '../../css/t/tb3-ubbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z0gawebmo"/><path class="nnl4rjbje"/><path class="tb3-ubbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wifi-laptop"} {...others} />);
}

export default Component;
