import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dze1-l9fl.css';
import '../../css/h/hdfw-6bvp.css';
import '../../css/d/deyxct9dl.css';
import '../../css/g/gt4aakbwe.css';
import '../../css/w/wgl8izwhi.css';
import '../../css/c/csg5j0bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dze1-l9fl wm-shadow"/><path class="hdfw-6bvp"/><path class="deyxct9dl"/><path class="gt4aakbwe"/><path class="wgl8izwhi"/><path class="csg5j0bwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:triangle"} {...others} />);
}

export default Component;
