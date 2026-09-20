import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqny8ubyk.css';
import '../../css/q/q5n41gzfd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mf8s2ik0t.css';
import '../../css/f/fxs222doy.css';
import '../../css/r/rdawjvbqg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fqny8ubyk"/><path class="q5n41gzfd"/><g class="ij2x_72vy"><path class="mf8s2ik0t"/><path class="fxs222doy"/><path class="rdawjvbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cricket"} {...others} />);
}

export default Component;
