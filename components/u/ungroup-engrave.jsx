import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y08lrpbvo.css';
import '../../css/i/ihus8nt9r.css';
import '../../css/d/dpl7m5bka.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k y08lrpbvo"/><path class="ihus8nt9r wm-a"/><path class="dpl7m5bka wm-shadow"/><path class="pfgi2nbvf wm-k"/><path class="wm-a wrc723bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ungroup-engrave"} {...others} />);
}

export default Component;
