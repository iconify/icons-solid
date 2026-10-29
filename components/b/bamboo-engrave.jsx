import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qsw3yebfy.css';
import '../../css/c/cc7rpwbsq.css';
import '../../css/x/xfnzpgbvh.css';
import '../../css/p/pandr5r4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qsw3yebfy"/><path class="cc7rpwbsq wm-shadow"/><path class="xfnzpgbvh"/><path class="pandr5r4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bamboo-engrave"} {...others} />);
}

export default Component;
