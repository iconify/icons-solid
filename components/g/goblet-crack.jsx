import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tojm1sbnd.css';
import '../../css/e/e_vphaczk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tojm1sbnd"/><path class="e_vphaczk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:goblet-crack"} {...others} />);
}

export default Component;
