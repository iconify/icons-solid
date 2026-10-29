import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h3svtlbuv.css';
import '../../css/m/m7d45up-b.css';
import '../../css/s/sn07vob-o.css';
import '../../css/l/lilw-wb5x.css';
import '../../css/o/ollpn-_wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h3svtlbuv"/><path class="m7d45up-b"/><path class="sn07vob-o"/><path class="lilw-wb5x"/><path class="ollpn-_wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man-turban"} {...others} />);
}

export default Component;
