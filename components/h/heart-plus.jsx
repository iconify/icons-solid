import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q8j5v_boz.css';
import '../../css/f/ftf12jbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q8j5v_boz wm-k"/><path class="ftf12jbxo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heart-plus"} {...others} />);
}

export default Component;
