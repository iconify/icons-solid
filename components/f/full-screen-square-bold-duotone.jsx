import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/ze0it41ch.css';
import '../../css/d/dlhjmks0h.css';
import '../../css/m/mn5pwmbkh.css';
import '../../css/f/f3i-0ybst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ze0it41ch"/><path class="dlhjmks0h"/><path class="mn5pwmbkh"/><path class="f3i-0ybst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-square-bold-duotone"} {...others} />);
}

export default Component;
