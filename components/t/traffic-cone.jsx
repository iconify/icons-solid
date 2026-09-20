import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qdg6lobjo.css';
import '../../css/s/sy8it_bih.css';
import '../../css/s/sw3gs951t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qdg6lobjo"/><path class="sy8it_bih"/><path class="sw3gs951t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:traffic-cone"} {...others} />);
}

export default Component;
