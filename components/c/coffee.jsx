import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6t8f588p.css';
import '../../css/c/c-fq54bbq.css';
import '../../css/t/t2kold76n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d6t8f588p"/><path clip-rule="evenodd" class="c-fq54bbq"/><path class="t2kold76n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:coffee"} {...others} />);
}

export default Component;
