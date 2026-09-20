import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w30p9ms3q.css';
import '../../css/b/bxeul--al.css';
import '../../css/g/gskkfws9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w30p9ms3q"/><path class="bxeul--al"/><path class="gskkfws9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-outline"} {...others} />);
}

export default Component;
