import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2ektbc6v.css';
import '../../css/m/mv_pbvb2a.css';
import '../../css/q/qgc7ufb8z.css';
import '../../css/y/yqjtrgmuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j2ektbc6v"/><path class="mv_pbvb2a"/><path class="qgc7ufb8z"/><path class="yqjtrgmuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rugby-bold-duotone"} {...others} />);
}

export default Component;
