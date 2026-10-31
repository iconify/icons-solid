import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o8160g47h.css';
import '../../css/s/so_a8ux-a.css';
import '../../css/t/tnd74bbxk.css';
import '../../css/k/k6yqcpy5z.css';
import '../../css/o/oohlmtaqi.css';
import '../../css/d/dev5_mbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o8160g47h wm-shadow"/><path class="so_a8ux-a"/><path class="tnd74bbxk"/><path class="k6yqcpy5z"/><path class="oohlmtaqi"/><path class="dev5_mbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:airplay"} {...others} />);
}

export default Component;
