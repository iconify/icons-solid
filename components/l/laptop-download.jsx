import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvclpxbgj.css';
import '../../css/k/ka62jfb8e.css';
import '../../css/p/poocn6j4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kvclpxbgj"/><path clip-rule="evenodd" class="ka62jfb8e"/><path class="poocn6j4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:laptop-download"} {...others} />);
}

export default Component;
