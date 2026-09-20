import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqv5vww1h.css';
import '../../css/m/me8boxbny.css';
import '../../css/u/ubhztv17l.css';
import '../../css/f/fphc7f8tp.css';
import '../../css/o/ogp81k-ma.css';
import '../../css/c/c6f-0mbed.css';
import '../../css/s/sk-k7ub3u.css';
import '../../css/l/lhe-fcc6v.css';
import '../../css/b/b7e38wcga.css';
import '../../css/m/m5o3qc0st.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aqv5vww1h"/><path clip-rule="evenodd" class="me8boxbny"/><path class="ubhztv17l"/><path class="fphc7f8tp"/><path class="ogp81k-ma"/><path class="c6f-0mbed"/><path class="sk-k7ub3u"/><path class="lhe-fcc6v"/><path class="b7e38wcga"/><path class="m5o3qc0st"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radial-blur-outline"} {...others} />);
}

export default Component;
