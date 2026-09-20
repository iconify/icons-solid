import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hllyxzboc.css';
import '../../css/x/xtutonbhb.css';
import '../../css/m/mj_6ev9oe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="xtutonbhb"/><path class="mj_6ev9oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-zoom-in-linear"} {...others} />);
}

export default Component;
