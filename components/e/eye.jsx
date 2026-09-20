import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/r/rm4udvayk.css';
import '../../css/p/po4xt0brp.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="rm4udvayk"/><path class="po4xt0brp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:eye"} {...others} />);
}

export default Component;
