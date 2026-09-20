import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahytozbix.css';
import '../../css/w/w6xnrhb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ahytozbix"/><path class="w6xnrhb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hexagons-7"} {...others} />);
}

export default Component;
