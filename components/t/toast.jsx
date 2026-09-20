import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z7_t-ub5k.css';
import '../../css/q/q3wy5r3wj.css';
import '../../css/i/i8nbo_yep.css';
import '../../css/j/jf2l-gfxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="z7_t-ub5k"/><path class="q3wy5r3wj"/><path class="i8nbo_yep"/><path class="jf2l-gfxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toast"} {...others} />);
}

export default Component;
