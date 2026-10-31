import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/suc50roas.css';
import '../../css/c/csuq12b_r.css';
import '../../css/i/i_ko-0b3r.css';
import '../../css/k/kotscnq9b.css';
import '../../css/w/wy41uxbne.css';
import '../../css/l/lw79y1bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="suc50roas wm-shadow"/><path class="csuq12b_r"/><path class="i_ko-0b3r"/><path class="kotscnq9b"/><path class="wy41uxbne"/><path class="lw79y1bjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wrench"} {...others} />);
}

export default Component;
