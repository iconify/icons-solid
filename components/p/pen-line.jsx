import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rg3866-_q.css';
import '../../css/t/tnuzb1b8j.css';
import '../../css/b/b6q0p2b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rg3866-_q"/><path class="tnuzb1b8j"/><path class="b6q0p2b8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pen-line"} {...others} />);
}

export default Component;
