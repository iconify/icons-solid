import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uxw27rbus.css';
import '../../css/f/falfbbbsl.css';
import '../../css/l/lq3i3yb6h.css';
import '../../css/h/h8xc97bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uxw27rbus wm-shadow"/><path class="falfbbbsl"/><path class="lq3i3yb6h"/><path class="h8xc97bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lock-keyhole"} {...others} />);
}

export default Component;
