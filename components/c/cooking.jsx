import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0p36h5cb.css';
import '../../css/q/q-xugtb6l.css';
import '../../css/a/a3m0cpmmv.css';
import '../../css/h/h4qgcd91j.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/e/e7dxpjqgm.css';
import '../../css/c/ctdf4jbqn.css';
import '../../css/s/sj83t6mlj.css';
import '../../css/q/qyfufjbpg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b0p36h5cb"/><path class="q-xugtb6l"/><path class="a3m0cpmmv"/><circle class="h4qgcd91j"/><g class="ij2x_72vy"><path class="e7dxpjqgm"/><path class="ctdf4jbqn"/><circle class="sj83t6mlj"/><path class="qyfufjbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cooking"} {...others} />);
}

export default Component;
