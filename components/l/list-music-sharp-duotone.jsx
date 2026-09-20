import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/voakxho5e.css';
import '../../css/t/tg0xmb4fk.css';
import '../../css/c/cna37lbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="voakxho5e"/><path class="tg0xmb4fk"/><path class="cna37lbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-music-sharp-duotone"} {...others} />);
}

export default Component;
