import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9jsdsb8y.css';
import '../../css/a/a59r3ek-x.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="w9jsdsb8y"/><path clip-rule="evenodd" class="a59r3ek-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:list"} {...others} />);
}

export default Component;
