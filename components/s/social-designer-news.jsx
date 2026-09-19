import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hn5l_0bqz.css';
import '../../css/z/z2qhsz0wy.css';
import '../../css/a/aumxqe4yi.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="hn5l_0bqz"/><path class="z2qhsz0wy"/><path class="aumxqe4yi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-designer-news"} {...others} />);
}

export default Component;
