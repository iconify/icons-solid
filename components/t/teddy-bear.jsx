import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wwjpgwbog.css';
import '../../css/w/w3rog89ll.css';
import '../../css/f/f9kuftlin.css';
import '../../css/v/vun8npban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wwjpgwbog"/><path class="w3rog89ll"/><path class="f9kuftlin"/><path class="vun8npban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:teddy-bear"} {...others} />);
}

export default Component;
