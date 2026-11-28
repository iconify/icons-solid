import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2op8cc7m.css';
import '../../css/a/alfvwt82g.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="n2op8cc7m"/><path class="alfvwt82g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sort-alphabetical-descending-duotone"} {...others} />);
}

export default Component;
