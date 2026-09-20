import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vybouiput.css';
import '../../css/k/kt8n5eewz.css';
import '../../css/o/o50ddxiay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vybouiput"/><path class="kt8n5eewz"/><circle class="o50ddxiay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-music"} {...others} />);
}

export default Component;
