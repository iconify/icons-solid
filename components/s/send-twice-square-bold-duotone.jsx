import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/j/jrhkmqbue.css';
import '../../css/i/ie_r_ccsv.css';
import '../../css/o/om98qib7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="jrhkmqbue"/><path class="ie_r_ccsv"/><path class="om98qib7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:send-twice-square-bold-duotone"} {...others} />);
}

export default Component;
