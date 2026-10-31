import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0yeiqb_q.css';
import '../../css/l/lxvju2zje.css';
import '../../css/y/yljz0vb2z.css';
import '../../css/a/alpycw6fq.css';
import '../../css/h/hteq5wbmp.css';
import '../../css/o/of3xf-b0l.css';
import '../../css/e/e0_iq_4xf.css';
import '../../css/c/ch_8149nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h0yeiqb_q"><path class="lxvju2zje wm-shadow"/><path class="wm-shadow yljz0vb2z"/><path class="alpycw6fq wm-k"/><path class="hteq5wbmp wm-k"/><path class="of3xf-b0l wm-k"/><path class="e0_iq_4xf wm-k"/><path class="ch_8149nb wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:broom"} {...others} />);
}

export default Component;
