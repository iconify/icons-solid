import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zpgwv8bay.css';
import '../../css/p/pnwvjdbeb.css';
import '../../css/a/axxpdcbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="zpgwv8bay"/><path class="pnwvjdbeb"/><path class="axxpdcbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fan"} {...others} />);
}

export default Component;
