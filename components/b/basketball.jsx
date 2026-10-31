import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/asqlutt7r.css';
import '../../css/b/b9yseebrn.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x2uudub6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="asqlutt7r"/><path class="b9yseebrn wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x2uudub6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:basketball"} {...others} />);
}

export default Component;
