import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/q/qyc6_hf6l.css';
import '../../css/h/hos6inb8p.css';
import '../../css/k/k-5kfxb8y.css';
import '../../css/g/gd1_dnznc.css';
import '../../css/j/jk9trwbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="qyc6_hf6l"/><path class="hos6inb8p"/><path class="k-5kfxb8y"/><path class="gd1_dnznc"/><path class="jk9trwbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:square-terminal"} {...others} />);
}

export default Component;
