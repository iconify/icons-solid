import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xnrl5zb-x.css';
import '../../css/e/eho_n0s9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xnrl5zb-x"/><path class="eho_n0s9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:link-2"} {...others} />);
}

export default Component;
