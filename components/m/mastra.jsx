import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cgj8itb0a.css';
import '../../css/u/uf_emnbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cgj8itb0a"/><path clip-rule="evenodd" class="uf_emnbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mastra"} {...others} />);
}

export default Component;
