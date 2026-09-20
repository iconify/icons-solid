import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef4t540_c.css';
import '../../css/g/gjtfqlb3r.css';
import '../../css/h/h1c-_2s9r.css';
import '../../css/v/vsobki5ny.css';
import '../../css/n/n7swwqbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ef4t540_c"/><path class="gjtfqlb3r"/><path class="h1c-_2s9r"/><path class="vsobki5ny"/><path class="n7swwqbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-bold-duotone"} {...others} />);
}

export default Component;
