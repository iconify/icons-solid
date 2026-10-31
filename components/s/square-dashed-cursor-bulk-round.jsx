import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-8nqbwo.css';
import '../../css/s/s7ofhx9en.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="um-8nqbwo"/><path class="s7ofhx9en"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-cursor-bulk-round"} {...others} />);
}

export default Component;
