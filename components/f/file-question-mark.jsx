import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/up6z22b1n.css';
import '../../css/b/b6e_j2rdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="up6z22b1n"/><path class="b6e_j2rdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-question-mark"} {...others} />);
}

export default Component;
