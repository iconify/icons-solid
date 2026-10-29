import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/z/zclo0mbka.css';
import '../../css/y/y2k4rub5q.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/x/xnnn3ac7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="wm-a zclo0mbka"/><path class="wm-shadow y2k4rub5q"/><path class="st-oxhb_e wm-k"/><path class="wm-a xnnn3ac7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-engrave"} {...others} />);
}

export default Component;
