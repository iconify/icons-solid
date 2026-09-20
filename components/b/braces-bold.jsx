import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awoarn9md.css';
import '../../css/u/u0xqjq4ej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="awoarn9md"/><path class="u0xqjq4ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:braces-bold"} {...others} />);
}

export default Component;
