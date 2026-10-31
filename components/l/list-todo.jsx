import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zrvc1yqae.css';
import '../../css/w/wt0-iuv_w.css';
import '../../css/b/b2_xccbks.css';
import '../../css/w/w7o9gp24m.css';
import '../../css/i/iygtibqrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zrvc1yqae"/><path class="wm-shine wt0-iuv_w"/><path class="b2_xccbks wm-k"/><path class="w7o9gp24m wm-a"/><path class="iygtibqrr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-todo"} {...others} />);
}

export default Component;
