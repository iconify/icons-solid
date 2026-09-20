import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxjjl5kkt.css';
import '../../css/u/u4vu1vb4p.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-8};
const content = `<g class="cuyn6tgcc"><path class="cxjjl5kkt"/><path class="u4vu1vb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:npm"} {...others} />);
}

export default Component;
