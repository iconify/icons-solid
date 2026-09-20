import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_yxthbzw.css';
import '../../css/s/sll_zg-uo.css';
import '../../css/j/jhsistbnu.css';
import '../../css/u/u_c9_cbyw.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGnuJMQSqw" x1="256" x2="256" y1="506.703" y2="5.298" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset=".5" class="g_yxthbzw"/><stop offset="1" class="sll_zg-uo"/></linearGradient><path fill="url(#SVGnuJMQSqw)" class="jhsistbnu"/><path class="u_c9_cbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:databasement-dark"} {...others} />);
}

export default Component;
