import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ee60chbki.css';
import '../../css/b/b3yv8vu-n.css';
import '../../css/p/ppte9cccs.css';
import '../../css/x/xzc8q_bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ee60chbki wm-k"/><path class="b3yv8vu-n wm-k"/><path class="ppte9cccs wm-a"/><path class="wm-s xzc8q_bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off-sketch"} {...others} />);
}

export default Component;
