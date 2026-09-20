import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yc0obxb_k.css';
import '../../css/d/dp_o11dny.css';
import '../../css/b/b6kx-7ubi.css';
import '../../css/o/oqz357xqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yc0obxb_k"/><path class="dp_o11dny"/><path class="b6kx-7ubi"/><path class="oqz357xqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-shredder-1"} {...others} />);
}

export default Component;
