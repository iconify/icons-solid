import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4d54nbgi.css';
import '../../css/n/nvnb2yl3l.css';
import '../../css/s/s164q9ezg.css';
import '../../css/p/px95rrtwn.css';
import '../../css/j/jvgtvgbul.css';
import '../../css/y/ycfniab1x.css';
import '../../css/r/r_ytq1zpp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d4d54nbgi"/><path class="nvnb2yl3l"/><path class="s164q9ezg"/><path class="px95rrtwn"/><path class="jvgtvgbul"/><path class="ycfniab1x"/><path class="r_ytq1zpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:framewithtiles"} {...others} />);
}

export default Component;
