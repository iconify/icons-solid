import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cv_bv5bue.css';
import '../../css/a/a_egs8b1e.css';
import '../../css/s/sencbj8te.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cv_bv5bue"/><path class="a_egs8b1e"/><path class="sencbj8te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-bold-duotone"} {...others} />);
}

export default Component;
