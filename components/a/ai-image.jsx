import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pyaa84bio.css';
import '../../css/r/ru_bpyzav.css';
import '../../css/c/c1-je2b0b.css';
import '../../css/h/h4_j_tb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pyaa84bio"/><path class="ru_bpyzav"/><path class="c1-je2b0b"/><path class="h4_j_tb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-image"} {...others} />);
}

export default Component;
