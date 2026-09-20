import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nbicbbcfy.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxw8ohblp.css';
import '../../css/l/lqwd9zr1i.css';
import '../../css/b/bethf461k.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="nbicbbcfy"/><g transform="translate(2 2)" class="cuyn6tgcc"><circle class="bxw8ohblp"/><circle class="lqwd9zr1i"/><circle class="bethf461k"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:calendar-days"} {...others} />);
}

export default Component;
