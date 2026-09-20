import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b262p1bwm.css';
import '../../css/j/jubl0mbgj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bw835zz1c.css';
import '../../css/l/lyurstbcd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b262p1bwm"/><path class="jubl0mbgj"/><g class="ij2x_72vy"><path class="bw835zz1c"/><path class="lyurstbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:penguin"} {...others} />);
}

export default Component;
