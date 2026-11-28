import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv08l9b3p.css';
import '../../css/c/csx5c8b3j.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="iv08l9b3p"/><path class="csx5c8b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:table-of-contents-duotone"} {...others} />);
}

export default Component;
