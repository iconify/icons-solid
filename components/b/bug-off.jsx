import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t97e02ksl.css';
import '../../css/w/wpc2i_b8u.css';
import '../../css/y/ysnt-_big.css';
import '../../css/m/mjvtgbc-o.css';
import '../../css/h/hlf4yacps.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t97e02ksl wm-shadow"/><path class="wpc2i_b8u"/><path class="ysnt-_big"/><path class="mjvtgbc-o"/><path class="hlf4yacps"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bug-off"} {...others} />);
}

export default Component;
