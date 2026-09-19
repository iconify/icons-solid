import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4g_jo-zt.css';
import '../../css/e/e0u1gobuf.css';
import '../../css/m/mhq_v1gqu.css';
import '../../css/m/mq_a1yorf.css';
import '../../css/a/aowva-g4r.css';
import '../../css/d/di33hetob.css';
import '../../css/t/t0hd22bpy.css';
import '../../css/c/ccxzvsb9h.css';
import '../../css/g/gv9m5ebyh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w4g_jo-zt"/><path class="e0u1gobuf"/><path class="mhq_v1gqu"/><path class="mq_a1yorf"/><path class="aowva-g4r"/><path class="di33hetob"/><path class="t0hd22bpy"/><path class="ccxzvsb9h"/><path class="gv9m5ebyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bubbles"} {...others} />);
}

export default Component;
