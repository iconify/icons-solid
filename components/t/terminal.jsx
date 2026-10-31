import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/r/rhcejfosm.css';
import '../../css/y/ylxz8zujx.css';
import '../../css/s/sxdqjxb1k.css';
import '../../css/k/k1-fmacew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="rhcejfosm"/><path class="ylxz8zujx"/><path class="sxdqjxb1k"/><path class="k1-fmacew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:terminal"} {...others} />);
}

export default Component;
