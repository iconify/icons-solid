import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo1mwyf2n.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/l/lle3kpb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jo1mwyf2n"/><path class="jwj5s6brs"/><path clip-rule="evenodd" class="lle3kpb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-square-outline"} {...others} />);
}

export default Component;
