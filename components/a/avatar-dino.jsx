import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r2e_wsbfc.css';
import '../../css/o/o8rmnfbho.css';
import '../../css/z/zmwrmw2dd.css';
import '../../css/z/zpxyp1zit.css';
import '../../css/s/s_s701glh.css';
import '../../css/e/ewfbchzfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r2e_wsbfc wm-shadow"/><path class="o8rmnfbho"/><path class="zmwrmw2dd"/><path class="zpxyp1zit"/><path class="s_s701glh"/><path class="ewfbchzfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-dino"} {...others} />);
}

export default Component;
