import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/suef0m3kc.css';
import '../../css/t/ty8_j0btk.css';
import '../../css/z/z9whw7ayo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="suef0m3kc wm-k"/><path class="ty8_j0btk wm-s"/><path class="z9whw7ayo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sparkler"} {...others} />);
}

export default Component;
