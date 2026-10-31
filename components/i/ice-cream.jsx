import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j5_8k7bbz.css';
import '../../css/c/cuc1ym8nx.css';
import '../../css/z/zzk27lbsk.css';
import '../../css/v/vkauzrq6c.css';
import '../../css/t/t4a2dnb0a.css';
import '../../css/t/tw65nmb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j5_8k7bbz wm-shadow"/><path class="cuc1ym8nx"/><path class="zzk27lbsk"/><path class="vkauzrq6c"/><path class="t4a2dnb0a"/><path class="tw65nmb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ice-cream"} {...others} />);
}

export default Component;
