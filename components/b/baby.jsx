import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfau3qmaw.css';
import '../../css/c/ch_3s0byl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tfau3qmaw"/><path class="ch_3s0byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:baby"} {...others} />);
}

export default Component;
