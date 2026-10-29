import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gmt_adbti.css';
import '../../css/b/bjnb7-bsq.css';
import '../../css/w/w7oxpdccv.css';
import '../../css/i/ioten_ypp.css';
import '../../css/g/g8-fd1i8q.css';
import '../../css/t/t9j8x2bkw.css';
import '../../css/b/b4huht1nu.css';
import '../../css/h/hrksj7bju.css';
import '../../css/s/sbj3fsbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gmt_adbti wm-shadow"/><path class="bjnb7-bsq"/><path class="w7oxpdccv"/><path class="ioten_ypp"/><path class="g8-fd1i8q wm-shine"/><path class="t9j8x2bkw wm-s"/><path class="b4huht1nu wm-s"/><path class="hrksj7bju wm-s"/><path class="sbj3fsbgy wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:package-x"} {...others} />);
}

export default Component;
