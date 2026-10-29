import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yn5_upbxh.css';
import '../../css/x/xvh9ry9dj.css';
import '../../css/z/ztnistjcg.css';
import '../../css/p/pgm-ug5jq.css';
import '../../css/n/n65i2cfkw.css';
import '../../css/c/c9mwe-beg.css';
import '../../css/y/yeh6x5bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yn5_upbxh"/><path class="wm-a xvh9ry9dj"/><path class="wm-s ztnistjcg"/><path class="pgm-ug5jq wm-shadow"/><path class="n65i2cfkw wm-k"/><path class="c9mwe-beg wm-a"/><path class="wm-s yeh6x5bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-bucket-engrave"} {...others} />);
}

export default Component;
