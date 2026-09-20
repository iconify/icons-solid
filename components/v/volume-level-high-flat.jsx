import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/na-paxbuk.css';
import '../../css/m/ms-45pbir.css';
import '../../css/m/mfvyn3b0e.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="na-paxbuk"/><path class="ms-45pbir"/><path class="mfvyn3b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:volume-level-high-flat"} {...others} />);
}

export default Component;
