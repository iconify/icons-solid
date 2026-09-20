import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oq3k_h54k.css';
import '../../css/f/f7yhsbbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oq3k_h54k"/><path class="f7yhsbbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-open"} {...others} />);
}

export default Component;
