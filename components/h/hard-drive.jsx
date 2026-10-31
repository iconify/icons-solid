import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jemwryzre.css';
import '../../css/f/f_laxpb8u.css';
import '../../css/j/jfwpbfroj.css';
import '../../css/v/vm0unel-g.css';
import '../../css/i/ib1_m85zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jemwryzre wm-shadow"/><path class="f_laxpb8u wm-shadow"/><path class="jfwpbfroj"/><path class="vm0unel-g"/><path class="ib1_m85zv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hard-drive"} {...others} />);
}

export default Component;
