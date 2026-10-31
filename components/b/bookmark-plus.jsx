import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p2sajfbyc.css';
import '../../css/k/k2l7rvb9u.css';
import '../../css/z/z8ggteb9n.css';
import '../../css/t/t_wo4ibie.css';
import '../../css/c/cg45uwb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p2sajfbyc"/><path class="k2l7rvb9u wm-shine"/><path class="wm-k z8ggteb9n"/><path class="t_wo4ibie wm-a"/><path class="cg45uwb-l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bookmark-plus"} {...others} />);
}

export default Component;
