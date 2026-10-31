import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j0hgohbjf.css';
import '../../css/a/agel1da3k.css';
import '../../css/b/bgjdzjbce.css';
import '../../css/q/qsyy5gbfc.css';
import '../../css/e/el05qq-sl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j0hgohbjf wm-shadow"/><path class="agel1da3k"/><path class="bgjdzjbce"/><path class="qsyy5gbfc"/><path class="el05qq-sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-woman-bun"} {...others} />);
}

export default Component;
