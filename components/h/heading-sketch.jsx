import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rppywc_mp.css';
import '../../css/q/q272iccrr.css';
import '../../css/g/gjkr0gbmj.css';
import '../../css/j/jqsbxnbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rppywc_mp wm-k"/><path class="q272iccrr wm-a"/><path class="gjkr0gbmj wm-k"/><path class="jqsbxnbrn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-sketch"} {...others} />);
}

export default Component;
