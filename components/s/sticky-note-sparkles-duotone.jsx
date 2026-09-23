import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwww4ebon.css';
import '../../css/i/idman_klm.css';
import '../../css/o/o8j-0tn_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lwww4ebon"/><path class="idman_klm"/><path class="o8j-0tn_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-sparkles-duotone"} {...others} />);
}

export default Component;
