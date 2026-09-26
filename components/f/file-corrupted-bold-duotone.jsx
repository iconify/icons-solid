import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_46qwcua.css';
import '../../css/s/s8qju0q_z.css';
import '../../css/d/dtpu5cb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t_46qwcua"/><path class="s8qju0q_z"/><path class="dtpu5cb1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-bold-duotone"} {...others} />);
}

export default Component;
