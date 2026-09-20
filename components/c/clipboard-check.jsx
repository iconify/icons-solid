import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-_t91b_v.css';
import '../../css/b/bhuivwsqr.css';
import '../../css/k/kulkvfbzw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d-_t91b_v"/><path class="bhuivwsqr"/><path clip-rule="evenodd" class="kulkvfbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clipboard-check"} {...others} />);
}

export default Component;
