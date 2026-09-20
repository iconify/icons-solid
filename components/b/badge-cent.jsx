import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/baxpesbhm.css';
import '../../css/d/domos11ir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="baxpesbhm"/><path class="domos11ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-cent"} {...others} />);
}

export default Component;
