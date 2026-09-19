import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl4emnbrr.css';
import '../../css/h/h3vjndsnd.css';
import '../../css/l/lbkvsbcnv.css';
import '../../css/w/wg3fq-7mc.css';
import '../../css/t/t1o88tbmc.css';

const viewBox = {"width":301,"height":219};
const content = `<g class="ft5dv1b6b"><path class="rl4emnbrr"/><path class="h3vjndsnd"/><path class="lbkvsbcnv"/><path class="wg3fq-7mc"/><path class="t1o88tbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:no"} {...others} />);
}

export default Component;
