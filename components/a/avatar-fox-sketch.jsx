import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/czwvy50an.css';
import '../../css/s/sk0ha5box.css';
import '../../css/k/k4tj83qrr.css';
import '../../css/k/k9ddrkbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="czwvy50an"/><path class="sk0ha5box wm-k"/><path class="k4tj83qrr wm-k"/><path class="k9ddrkbna wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-fox-sketch"} {...others} />);
}

export default Component;
