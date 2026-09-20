import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/hs5vo2r3v.css';
import '../../css/x/xvj_y6bjg.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="hs5vo2r3v"/><path class="xvj_y6bjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:paper-folded"} {...others} />);
}

export default Component;
