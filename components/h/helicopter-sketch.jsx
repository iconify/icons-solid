import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ake5n5_8t.css';
import '../../css/r/r3en5bcjk.css';
import '../../css/s/s12z34bfj.css';
import '../../css/l/lekundbqi.css';
import '../../css/q/qln9-wiwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ake5n5_8t"/><path class="r3en5bcjk wm-k"/><path class="s12z34bfj wm-a"/><path class="lekundbqi wm-k"/><path class="qln9-wiwc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:helicopter-sketch"} {...others} />);
}

export default Component;
