import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb_m1r3fi.css';
import '../../css/v/vdylksbhi.css';
import '../../css/j/j9dgfb5fm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mb_m1r3fi"/><path class="vdylksbhi"/><path clip-rule="evenodd" class="j9dgfb5fm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-bold"} {...others} />);
}

export default Component;
