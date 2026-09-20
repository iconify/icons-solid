import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyh2aybyj.css';
import '../../css/s/sf5f6kbpj.css';
import '../../css/v/v8n_cvbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iyh2aybyj"/><path class="sf5f6kbpj"/><path class="v8n_cvbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:arrows-vertical"} {...others} />);
}

export default Component;
