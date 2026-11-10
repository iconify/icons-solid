import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jz02cezfb.css';
import '../../css/c/ce48pvosb.css';
import '../../css/f/fada9bbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jz02cezfb"/><path class="ce48pvosb"/><path class="fada9bbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-key"} {...others} />);
}

export default Component;
