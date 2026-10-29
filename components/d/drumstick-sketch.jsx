import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/veij98b8c.css';
import '../../css/j/j7oh25y3z.css';
import '../../css/x/x-suqcc-l.css';
import '../../css/s/sg87_pbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="veij98b8c"/><path class="j7oh25y3z wm-a"/><path class="wm-k x-suqcc-l"/><path class="sg87_pbju wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drumstick-sketch"} {...others} />);
}

export default Component;
