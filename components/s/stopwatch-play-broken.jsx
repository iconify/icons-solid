import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u8gkuv4uz.css';
import '../../css/o/oi9ky1bdz.css';
import '../../css/c/cfw654b4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u8gkuv4uz"/><path class="oi9ky1bdz"/><path class="cfw654b4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-play-broken"} {...others} />);
}

export default Component;
