import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pa4vnsmcu.css';
import '../../css/f/fylt460yu.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="pa4vnsmcu"/><path clip-rule="evenodd" class="fylt460yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:document-search"} {...others} />);
}

export default Component;
