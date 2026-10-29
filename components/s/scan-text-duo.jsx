import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/civkr7bau.css';
import '../../css/h/hs38sub6q.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/l0v-b4kbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="civkr7bau"/><path class="hs38sub6q wm-a"/><path class="l9lv5_bcf"/><path class="l0v-b4kbr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-text-duo"} {...others} />);
}

export default Component;
