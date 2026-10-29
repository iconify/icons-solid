import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w_umu3q7p.css';
import '../../css/d/djpm-nbqp.css';
import '../../css/w/wgaw3djmi.css';
import '../../css/r/rxypl7oqe.css';
import '../../css/g/gtohkybxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w_umu3q7p wm-k"/><path class="djpm-nbqp wm-a"/><path class="wgaw3djmi wm-shadow"/><path class="rxypl7oqe wm-k"/><path class="gtohkybxy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:umbrella-engrave"} {...others} />);
}

export default Component;
