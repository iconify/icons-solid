import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/l/l2ahvt68o.css';
import '../../css/p/p-o4ftb1y.css';
import '../../css/b/be_99jb-k.css';
import '../../css/m/m_c-5rbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="l2ahvt68o"/><path class="p-o4ftb1y"/><path class="be_99jb-k"/><path class="m_c-5rbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-x"} {...others} />);
}

export default Component;
