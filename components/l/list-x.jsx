import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tlehfg-gr.css';
import '../../css/a/ajv2b6b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tlehfg-gr wm-k"/><path class="ajv2b6b5q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-x"} {...others} />);
}

export default Component;
