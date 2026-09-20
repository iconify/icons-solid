import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlnehkbym.css';
import '../../css/t/t1fqozg8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zlnehkbym"/><path class="t1fqozg8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tab-arrow-down"} {...others} />);
}

export default Component;
