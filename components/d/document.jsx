import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9t97e2dy.css';
import '../../css/p/p7m4o0kko.css';

const viewBox = {"width":24,"height":32};
const content = `<g class="cuyn6tgcc"><path class="h9t97e2dy"/><path class="p7m4o0kko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:document"} {...others} />);
}

export default Component;
