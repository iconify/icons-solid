import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu0fh_seg.css';
import '../../css/p/pbgfbyb5w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yu0fh_seg"/><path class="pbgfbyb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:hinge-joint"} {...others} />);
}

export default Component;
