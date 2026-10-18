import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fm_39bb1n.css';
import '../../css/i/iglncxbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fm_39bb1n"/><path class="iglncxbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:key-round"} {...others} />);
}

export default Component;
