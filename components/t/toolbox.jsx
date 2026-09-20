import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_36mfbfe.css';
import '../../css/s/su8ljfsol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d_36mfbfe"/><path class="su8ljfsol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:toolbox"} {...others} />);
}

export default Component;
