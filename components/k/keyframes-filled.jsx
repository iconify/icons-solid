import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmui5qsxg.css';
import '../../css/i/i1pwypbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lmui5qsxg"/><path class="i1pwypbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:keyframes-filled"} {...others} />);
}

export default Component;
