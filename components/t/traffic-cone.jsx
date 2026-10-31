import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xv7931bvu.css';
import '../../css/c/c9ovs1b-c.css';
import '../../css/l/lztb1ab1b.css';
import '../../css/q/qq-9de6yl.css';
import '../../css/x/xdb_uikhm.css';
import '../../css/m/mpm8in82y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xv7931bvu"/><path class="c9ovs1b-c wm-shadow"/><path class="lztb1ab1b"/><path class="qq-9de6yl"/><path class="xdb_uikhm"/><path class="mpm8in82y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:traffic-cone"} {...others} />);
}

export default Component;
