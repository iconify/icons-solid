import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az26ljbfa.css';
import '../../css/c/cikki1bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="az26ljbfa"/><path class="cikki1bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hedgehog"} {...others} />);
}

export default Component;
