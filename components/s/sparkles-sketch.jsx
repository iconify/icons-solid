import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/isrgybm3a.css';
import '../../css/z/zorbjqvlv.css';
import '../../css/i/i0x2epj0c.css';
import '../../css/p/pzgabacqd.css';
import '../../css/z/z4znsyo7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="isrgybm3a"/><path class="wm-k zorbjqvlv"/><path class="i0x2epj0c wm-a"/><path class="pzgabacqd wm-k"/><path class="wm-a z4znsyo7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkles-sketch"} {...others} />);
}

export default Component;
