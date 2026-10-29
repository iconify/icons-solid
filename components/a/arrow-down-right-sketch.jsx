import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l5qeys4-i.css';
import '../../css/c/ckcy3p1yx.css';
import '../../css/i/iby81bbna.css';
import '../../css/v/v7jye1b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l5qeys4-i wm-k"/><path class="ckcy3p1yx wm-a"/><path class="iby81bbna wm-k"/><path class="v7jye1b8k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-right-sketch"} {...others} />);
}

export default Component;
