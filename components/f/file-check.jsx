import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw4807bsy.css';
import '../../css/c/cr17kfbkx.css';
import '../../css/p/pt_l-bbes.css';
import '../../css/j/jt250mb2z.css';
import '../../css/e/edto3tb2a.css';
import '../../css/y/y8r6rbc0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kw4807bsy wm-k"/><path class="cr17kfbkx wm-deco"/><path class="pt_l-bbes wm-k"/><path class="jt250mb2z wm-k"/><path class="edto3tb2a wm-shadow"/><path class="wm-shine y8r6rbc0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-check"} {...others} />);
}

export default Component;
