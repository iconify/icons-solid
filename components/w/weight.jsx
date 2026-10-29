import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n7olqbbjh.css';
import '../../css/o/owpe21ujq.css';
import '../../css/q/q24qtebhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n7olqbbjh"/><path class="owpe21ujq"/><path class="q24qtebhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:weight"} {...others} />);
}

export default Component;
