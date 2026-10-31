import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c27gb5aaw.css';
import '../../css/u/u65q_3yji.css';
import '../../css/m/mdh7a6_4z.css';
import '../../css/n/nx_kps3sz.css';
import '../../css/z/z7w1atayl.css';
import '../../css/v/vev7ycc8i.css';
import '../../css/m/mh38_topn.css';
import '../../css/i/ivwgo2bss.css';
import '../../css/x/x9jo8eyka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c27gb5aaw wm-shadow"/><path class="u65q_3yji wm-s"/><path class="mdh7a6_4z wm-shadow"/><path class="nx_kps3sz"/><path class="z7w1atayl"/><path class="vev7ycc8i"/><path class="mh38_topn wm-s"/><path class="ivwgo2bss wm-s"/><path class="wm-s x9jo8eyka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:christmas-candle"} {...others} />);
}

export default Component;
