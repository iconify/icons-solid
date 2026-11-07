import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tkmm4m1rs.css';
import '../../css/i/izgpa7bgk.css';
import '../../css/x/x07yrh8hm.css';
import '../../css/o/obe4s4bsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="tkmm4m1rs"/><path class="izgpa7bgk"/></g><path class="x07yrh8hm"/><path class="obe4s4bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-bold-duotone"} {...others} />);
}

export default Component;
