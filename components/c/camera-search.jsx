import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk6txqizc.css';
import '../../css/w/wr5yqvscb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sk6txqizc"/><path class="wr5yqvscb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-search"} {...others} />);
}

export default Component;
