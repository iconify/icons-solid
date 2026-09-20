import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/at-rwqbck.css';
import '../../css/f/fzkdd7gcg.css';
import '../../css/z/zgdruyedc.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="at-rwqbck"/><path class="fzkdd7gcg"/><path class="zgdruyedc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:window-content"} {...others} />);
}

export default Component;
