import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6u19dbbl.css';
import '../../css/l/laqe9rlbp.css';
import '../../css/d/d9-01rbag.css';
import '../../css/o/ocwyltn_q.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGoc97GeEW" x1="433.4" x2="-10.6" y1="446.2" y2="73.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="i6u19dbbl"/><stop offset=".63" class="laqe9rlbp"/><stop offset="1" class="d9-01rbag"/></linearGradient><path fill="url(#SVGoc97GeEW)" class="ocwyltn_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beszel"} {...others} />);
}

export default Component;
