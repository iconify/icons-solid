import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uapa1_3wq.css';
import '../../css/u/uoo0a1wol.css';
import '../../css/c/c8wu6vbwj.css';
import '../../css/g/g6f1ct3rs.css';
import '../../css/r/rlxjm2brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uapa1_3wq wm-shadow"/><path class="uoo0a1wol"/><path class="c8wu6vbwj"/><path class="g6f1ct3rs"/><path class="rlxjm2brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:toolbox"} {...others} />);
}

export default Component;
