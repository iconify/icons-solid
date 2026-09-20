import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxp524bfr.css';
import '../../css/p/pp8tacb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pxp524bfr"/><path class="pp8tacb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-pen-line"} {...others} />);
}

export default Component;
