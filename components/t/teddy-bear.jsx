import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lv4ij4qjj.css';
import '../../css/q/qkeklebii.css';
import '../../css/h/hvzdssbyh.css';
import '../../css/o/olj8mto2b.css';
import '../../css/g/g2pu41m2i.css';
import '../../css/v/vbsvkz40u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lv4ij4qjj wm-shadow"/><path class="qkeklebii"/><path class="hvzdssbyh"/><path class="olj8mto2b"/><path class="g2pu41m2i"/><path class="vbsvkz40u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:teddy-bear"} {...others} />);
}

export default Component;
