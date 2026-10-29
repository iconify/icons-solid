import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ttbnysbpu.css';
import '../../css/t/tf8653b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ttbnysbpu wm-k"/><path class="tf8653b3t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:route-sketch"} {...others} />);
}

export default Component;
