import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xc8q9jb2l.css';
import '../../css/v/vyncxjice.css';
import '../../css/u/u-ekc0a9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xc8q9jb2l"/><path class="vyncxjice"/><path class="u-ekc0a9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:feed"} {...others} />);
}

export default Component;
