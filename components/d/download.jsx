import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/na3w2hbjp.css';
import '../../css/g/g4qe_r9hp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="na3w2hbjp"/><path class="g4qe_r9hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:download"} {...others} />);
}

export default Component;
