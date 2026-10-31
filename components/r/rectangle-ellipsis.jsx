import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-yi-ybpi.css';
import '../../css/o/ouvp0jdyj.css';
import '../../css/k/kzcio_bgg.css';
import '../../css/w/w03x0-bud.css';
import '../../css/w/wcwroebbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v-yi-ybpi wm-shadow"/><path class="ouvp0jdyj"/><path class="kzcio_bgg"/><path class="w03x0-bud"/><path class="wcwroebbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rectangle-ellipsis"} {...others} />);
}

export default Component;
