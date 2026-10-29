import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l8807ublx.css';
import '../../css/f/f91jueh9c.css';
import '../../css/l/lzvbhobgb.css';
import '../../css/i/i-xuwwzrm.css';
import '../../css/r/rxw6t9p2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l8807ublx"/><path class="f91jueh9c wm-k"/><path class="lzvbhobgb wm-a"/><path class="i-xuwwzrm wm-k"/><path class="rxw6t9p2o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-text-sketch"} {...others} />);
}

export default Component;
