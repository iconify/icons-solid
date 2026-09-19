import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e6r0cm-zy.css';
import '../../css/v/vpz66ccjz.css';
import '../../css/k/kwx9ypbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e6r0cm-zy"/><path class="vpz66ccjz"/><path clip-rule="evenodd" class="kwx9ypbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:expectorate-outline-24px"} {...others} />);
}

export default Component;
