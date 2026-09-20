import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqeft6bzh.css';
import '../../css/e/e8cnlbw0j.css';
import '../../css/j/j9mwnovjy.css';
import '../../css/e/er3_-p_jx.css';
import '../../css/z/z6sfm0bio.css';
import '../../css/b/bx9yebd_e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jqeft6bzh"/><path class="e8cnlbw0j"/><path class="j9mwnovjy"/><path class="er3_-p_jx"/><path class="z6sfm0bio"/><path class="bx9yebd_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:curves-levels-graph"} {...others} />);
}

export default Component;
