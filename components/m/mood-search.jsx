import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9e5cmb2b.css';
import '../../css/c/cwgy4ac4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w9e5cmb2b"/><path class="cwgy4ac4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-search"} {...others} />);
}

export default Component;
