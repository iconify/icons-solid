import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/j/jxhv6pb2q.css';
import '../../css/s/sa9yuacrk.css';
import '../../css/x/xp2bbwbqh.css';
import '../../css/b/baa-5bbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fyr67fbfm"/><path class="jxhv6pb2q"/><path class="sa9yuacrk"/><path class="xp2bbwbqh"/><path class="baa-5bbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-broken"} {...others} />);
}

export default Component;
