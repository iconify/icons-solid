import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jv-29ihls.css';
import '../../css/s/s07ur1brs.css';
import '../../css/j/jfywoqvur.css';
import '../../css/d/dihtcvbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jv-29ihls"/><path class="s07ur1brs"/><path clip-rule="evenodd" class="jfywoqvur"/><path class="dihtcvbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-exclamation-alt-solid"} {...others} />);
}

export default Component;
