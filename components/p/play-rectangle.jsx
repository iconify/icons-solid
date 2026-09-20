import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6k9lrz9g.css';
import '../../css/f/f0t37ercu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b6k9lrz9g"/><path clip-rule="evenodd" class="f0t37ercu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:play-rectangle"} {...others} />);
}

export default Component;
