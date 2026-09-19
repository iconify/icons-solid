import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxr06lbbn.css';
import '../../css/w/w3_9rbijr.css';
import '../../css/d/difmjnb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zxr06lbbn"/><path clip-rule="evenodd" class="w3_9rbijr"/><path class="difmjnb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:copper-iud-outline-24px"} {...others} />);
}

export default Component;
