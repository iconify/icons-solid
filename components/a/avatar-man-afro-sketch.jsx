import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ev6ijubpd.css';
import '../../css/h/hm6zcabmy.css';
import '../../css/u/u1-3bgbet.css';
import '../../css/n/nemtfibtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ev6ijubpd wm-k"/><path class="hm6zcabmy wm-a"/><path class="u1-3bgbet wm-k"/><path class="nemtfibtm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-afro-sketch"} {...others} />);
}

export default Component;
