import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w28ioxlaz.css';
import '../../css/j/j85cgdb0i.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="w28ioxlaz"/><path clip-rule="evenodd" class="j85cgdb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:credit-card"} {...others} />);
}

export default Component;
