import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu9ajoqpc.css';
import '../../css/e/eq0evh2wi.css';
import '../../css/w/wkd69f43m.css';

const viewBox = {"width":108,"height":63};
const content = `<g class="cuyn6tgcc"><path class="wu9ajoqpc"/><path clip-rule="evenodd" class="eq0evh2wi"/><path class="wkd69f43m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-male-0203m-alt"} {...others} />);
}

export default Component;
