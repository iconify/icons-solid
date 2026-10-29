import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkrfzvbns.css';
import '../../css/l/l24jhwj-r.css';
import '../../css/f/fluce_b-m.css';
import '../../css/b/b1j359zmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zkrfzvbns"/><path class="l24jhwj-r wm-a"/><path class="fluce_b-m wm-k"/><path class="b1j359zmm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:switch-camera-sketch"} {...others} />);
}

export default Component;
