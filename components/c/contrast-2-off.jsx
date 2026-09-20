import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m91s8ptxl.css';
import '../../css/p/plff90baa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m91s8ptxl"/><path class="plff90baa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:contrast-2-off"} {...others} />);
}

export default Component;
