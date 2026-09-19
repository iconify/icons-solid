import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/a4imupo2v.css';
import '../../css/f/fxe-jccqn.css';
import '../../css/m/m6lqi6bsg.css';
import '../../css/f/fp_l0ip9t.css';
import '../../css/p/p1nmfzbdr.css';
import '../../css/g/ggeo9nvcm.css';
import '../../css/q/qtb8y5omm.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="a4imupo2v"/><path class="fxe-jccqn"/><path clip-rule="evenodd" class="m6lqi6bsg"/></g><path clip-rule="evenodd" class="fp_l0ip9t"/><path clip-rule="evenodd" class="p1nmfzbdr"/><path clip-rule="evenodd" class="ggeo9nvcm"/><path clip-rule="evenodd" class="qtb8y5omm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clipboard-check-circle-print"} {...others} />);
}

export default Component;
