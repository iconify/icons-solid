import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vk3-pe03e.css';
import '../../css/d/dmj_t_b1h.css';
import '../../css/i/itu9wbc8d.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vk3-pe03e"/><path class="dmj_t_b1h wm-shine"/><path class="itu9wbc8d wm-k"/><path class="ar0r6f66r wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:landmark"} {...others} />);
}

export default Component;
