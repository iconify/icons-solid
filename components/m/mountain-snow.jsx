import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j85x09k-h.css';
import '../../css/d/dw69-3bge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j85x09k-h"/><path class="dw69-3bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mountain-snow"} {...others} />);
}

export default Component;
