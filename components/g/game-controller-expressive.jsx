import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cr8x1jb2p.css';
import '../../css/j/j023bmbul.css';
import '../../css/y/ya1c3z94y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cr8x1jb2p"/><path clip-rule="evenodd" class="j023bmbul"/><path clip-rule="evenodd" class="ya1c3z94y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:game-controller-expressive"} {...others} />);
}

export default Component;
