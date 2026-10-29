import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uo2zv8b4x.css';
import '../../css/l/lc8hcibtz.css';
import '../../css/p/pg6ewjkha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uo2zv8b4x"/><path class="lc8hcibtz"/><path class="pg6ewjkha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-frog"} {...others} />);
}

export default Component;
