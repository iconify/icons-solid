import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8qdwpbgi.css';
import '../../css/x/xzh-0pt_j.css';
import '../../css/z/zh0qhunzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i8qdwpbgi"/><path class="xzh-0pt_j"/><path class="zh0qhunzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-watch-04"} {...others} />);
}

export default Component;
