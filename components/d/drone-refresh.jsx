import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t013k49ky.css';
import '../../css/s/sutgbdv0l.css';
import '../../css/o/omi94nbqz.css';
import '../../css/i/i_r26abkr.css';
import '../../css/f/fg8zbvgik.css';
import '../../css/t/t6l_r4bqw.css';
import '../../css/a/aodls9b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t013k49ky"/><path class="sutgbdv0l"/><path class="omi94nbqz"/><path class="i_r26abkr"/><path class="fg8zbvgik"/><path class="t6l_r4bqw"/><path class="aodls9b8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drone-refresh"} {...others} />);
}

export default Component;
