import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2fzalbpg.css';
import '../../css/j/jfesrw_tv.css';
import '../../css/f/ftj9ogb6c.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="h2fzalbpg"/><path clip-rule="evenodd" class="jfesrw_tv"/><path class="ftj9ogb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:duplicate-print"} {...others} />);
}

export default Component;
