import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jdanpobzu.css';
import '../../css/e/ey6u08b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jdanpobzu"/><path class="ey6u08b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:square-terminal"} {...others} />);
}

export default Component;
