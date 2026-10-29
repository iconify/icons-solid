import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_w-okbdz.css';
import '../../css/y/yjp621tnw.css';
import '../../css/n/n2cupqgke.css';
import '../../css/o/o-wfbkbun.css';
import '../../css/k/kgbf2w94q.css';
import '../../css/b/bn5qvcbnx.css';
import '../../css/a/aed_vqqcr.css';
import '../../css/r/rpq1tqbjn.css';
import '../../css/c/ct92l0bwl.css';
import '../../css/v/vurs6yt0y.css';
import '../../css/c/cco0b5wxi.css';
import '../../css/f/fxvb8hb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_w-okbdz wm-shadow"/><path class="wm-shadow yjp621tnw"/><path class="n2cupqgke"/><path class="o-wfbkbun"/><path class="kgbf2w94q"/><path class="bn5qvcbnx"/><path class="aed_vqqcr wm-shine"/><path class="rpq1tqbjn wm-shine"/><path class="ct92l0bwl"/><path class="vurs6yt0y"/><path class="cco0b5wxi"/><path class="fxvb8hb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:message-circle-question"} {...others} />);
}

export default Component;
