import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrxjqmqby.css';
import '../../css/w/wm-0h7b_b.css';
import '../../css/r/rde_qvbty.css';
import '../../css/e/e8-9l-bov.css';
import '../../css/e/eow81se0r.css';
import '../../css/f/fygq_1b7j.css';
import '../../css/q/qei62693c.css';
import '../../css/z/zgafnloyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lrxjqmqby wm-k"/><path class="wm-0h7b_b wm-deco"/><path class="rde_qvbty wm-k"/><path class="e8-9l-bov wm-k"/><path class="eow81se0r wm-shadow"/><path class="fygq_1b7j wm-shine"/><path class="qei62693c wm-shine"/><path class="wm-shine zgafnloyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-input"} {...others} />);
}

export default Component;
