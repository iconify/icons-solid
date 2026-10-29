import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rq7f8jb8g.css';
import '../../css/q/qu4omacka.css';
import '../../css/k/kzr_fgbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rq7f8jb8g wm-k"/><path class="qu4omacka wm-k"/><path class="kzr_fgbah wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mehndi-hand-sketch"} {...others} />);
}

export default Component;
