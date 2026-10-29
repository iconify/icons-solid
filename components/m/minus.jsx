import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d62hrbclj.css';
import '../../css/t/t2g4dfbck.css';
import '../../css/i/isq34acxh.css';
import '../../css/x/x-e655bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d62hrbclj wm-k"/><path class="t2g4dfbck wm-k"/><path class="isq34acxh wm-k"/><path class="wm-shine x-e655bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:minus"} {...others} />);
}

export default Component;
