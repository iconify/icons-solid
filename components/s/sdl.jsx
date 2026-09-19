import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/doprogbdx.css';
import '../../css/b/b5tmlbjxo.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="doprogbdx"/><path class="b5tmlbjxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sdl"} {...others} />);
}

export default Component;
