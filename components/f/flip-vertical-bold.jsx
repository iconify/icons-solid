import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bs00u1bfs.css';
import '../../css/k/ku9g8wbnx.css';
import '../../css/y/yr-jb4bim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bs00u1bfs"/><path class="ku9g8wbnx"/><path clip-rule="evenodd" class="yr-jb4bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-bold"} {...others} />);
}

export default Component;
