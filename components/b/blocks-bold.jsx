import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qma7dtbwt.css';
import '../../css/j/jr65o58xn.css';
import '../../css/i/infop7dit.css';
import '../../css/x/xxj3osb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qma7dtbwt"/><path class="jr65o58xn"/><path class="infop7dit"/><path class="xxj3osb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-bold"} {...others} />);
}

export default Component;
