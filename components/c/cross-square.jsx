import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3-tibcr.css';
import '../../css/i/ibb35-z6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ro3-tibcr"/><path class="ibb35-z6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cross-square"} {...others} />);
}

export default Component;
