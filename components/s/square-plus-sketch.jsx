import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvvkxkbcb.css';
import '../../css/s/szmghdbuf.css';
import '../../css/c/cuwghopiv.css';
import '../../css/q/q-90hqaaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qvvkxkbcb"/><path class="szmghdbuf wm-a"/><path class="cuwghopiv wm-k"/><path class="q-90hqaaz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-plus-sketch"} {...others} />);
}

export default Component;
