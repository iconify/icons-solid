import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ov3kx17-r.css';
import '../../css/f/fm9itxbgo.css';
import '../../css/r/r7qwbt-ac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ov3kx17-r"/><path class="fm9itxbgo"/><path class="r7qwbt-ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pencil-ruler-sharp-duotone"} {...others} />);
}

export default Component;
