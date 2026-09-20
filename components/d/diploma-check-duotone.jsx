import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pre6hebdw.css';
import '../../css/j/j1vcptbqo.css';
import '../../css/m/mqj0a8b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pre6hebdw"/><path class="j1vcptbqo"/><path class="mqj0a8b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:diploma-check-duotone"} {...others} />);
}

export default Component;
