import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nn3_qbmiu.css';
import '../../css/g/g-q028ykq.css';
import '../../css/k/k2m212bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nn3_qbmiu"/><path class="g-q028ykq wm-shadow"/><path class="k2m212bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-engrave"} {...others} />);
}

export default Component;
