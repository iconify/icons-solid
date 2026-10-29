import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bo1uwgbfy.css';
import '../../css/v/vfx376v4r.css';
import '../../css/k/k-k6k285a.css';
import '../../css/z/za3dt0bho.css';
import '../../css/r/rcb7clbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bo1uwgbfy"/><path class="vfx376v4r wm-a"/><path class="k-k6k285a wm-s"/><path class="za3dt0bho"/><path class="rcb7clbki wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-plus-duo"} {...others} />);
}

export default Component;
